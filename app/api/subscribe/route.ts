import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const form = await req.formData();
  const email = String(form.get("email") || "");
  if (!email || !email.includes("@")) {
    return NextResponse.redirect(new URL("/?subscribe=invalid", req.url), 303);
  }
  console.log("[subscribe]", email);
  return NextResponse.redirect(new URL("/?subscribe=ok", req.url), 303);
}
