import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request("http://localhost/", { headers: { accept: "text/html" } }), {
    ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
  }, { waitUntil() {}, passThroughOnException() {} });
}

test("renders Kauã's portfolio with core positioning", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /<title>Kauã Carlos — Software &amp; Computer Science<\/title>/i);
  assert.match(html, /Ciência da Computação/);
  assert.match(html, /PYTHON \/ BACKEND \/ DATA/);
  assert.match(html, /ESTÁGIO EM TECNOLOGIA/);
});

test("exposes the official GitHub and LinkedIn profiles safely", async () => {
  const html = await (await render()).text();
  assert.match(html, /href="https:\/\/github\.com\/CodeShinu"/);
  assert.match(html, /href="https:\/\/www\.linkedin\.com\/in\/devkaua06\/"/);
  assert.match(html, /target="_blank" rel="noopener noreferrer"/);
  assert.match(html, /"sameAs":\["https:\/\/github\.com\/CodeShinu","https:\/\/www\.linkedin\.com\/in\/devkaua06\/"\]/);
});

test("renders truthful projects and accessibility landmarks", async () => {
  const html = await (await render()).text();
  assert.match(html, /ProjetoKC API/);
  assert.match(html, /01 — WIP/);
  assert.match(html, /Controle de<br\/>Gastos Pessoais/);
  assert.match(html, /href="#main" class="skip"/);
  assert.match(html, /<nav aria-label="Navegação principal">/);
  assert.doesNotMatch(html, /Lorem ipsum|\[ADICIONAR/i);
});
