import { readFile } from "fs/promises";

export async function GET() {
  const buffer = await readFile("public/CV.pdf");

  const headers = new Headers();
  headers.append("Content-Disposition", 'attachment; filename="CV.pdf"');
  headers.append("Content-Type", "application/pdf");

  return new Response(buffer, { headers });
}
