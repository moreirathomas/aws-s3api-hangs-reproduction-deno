import { assertEquals } from "https://deno.land/std@0.214.0/assert/mod.ts";
import { join } from "https://deno.land/std@0.215.0/path/join.ts";
import { list } from "./main.ts";

const PROJECT = "develop/balyo_RHE-BASE-010_v2_01";
const RELEASE = "0.0.0-rc.1";

Deno.test("list folder with few object", async () => {
  const path = join(PROJECT, RELEASE);
  const result = await list(path);
  assertEquals(result.length, 2);
});

Deno.test("list folder with many objects", async () => {
  const path = join(PROJECT, RELEASE, "tiles");
  const result = await list(path);
  assertEquals(result.length, 884);
});
