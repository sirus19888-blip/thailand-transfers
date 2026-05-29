import { type NextRequest, NextResponse } from "next/server";

const routeHrefs: Record<string, string> = {
  "ao-nang-krabi-airport": "/routes/ao-nang-to-krabi-airport",
  "bangkok-chiang-mai": "/routes/bangkok-to-chiang-mai",
  "bangkok-hua-hin": "/routes/bangkok-to-hua-hin",
  "bkk-hua-hin": "/routes/suvarnabhumi-airport-to-hua-hin",
  "bkk-koh-chang": "/routes/suvarnabhumi-airport-to-koh-chang",
  "bkk-pattaya": "/routes/bangkok-airport-to-pattaya",
  "chiang-mai-bangkok": "/routes/chiang-mai-to-bangkok",
  "dmk-hua-hin": "/routes/don-mueang-airport-to-hua-hin",
  "dmk-pattaya": "/routes/don-mueang-airport-to-pattaya",
  "hua-hin-bangkok": "/routes/hua-hin-to-bangkok",
  "koh-chang-bangkok": "/routes/koh-chang-to-bangkok",
  "koh-chang-bkk": "/routes/koh-chang-to-suvarnabhumi-airport",
  "koh-phangan-surat-thani-airport":
    "/routes/koh-phangan-to-surat-thani-airport",
  "koh-phi-phi-krabi": "/routes/koh-phi-phi-to-krabi",
  "koh-phi-phi-phuket": "/routes/koh-phi-phi-to-phuket",
  "koh-samui-surat-thani-airport":
    "/routes/koh-samui-to-surat-thani-airport",
  "krabi-airport-ao-nang": "/routes/krabi-airport-to-ao-nang",
  "krabi-koh-phi-phi": "/routes/krabi-to-koh-phi-phi",
  "pattaya-bkk": "/routes/pattaya-to-bangkok-airport",
  "pattaya-dmk": "/routes/pattaya-to-don-mueang-airport",
  "patong-phuket-airport": "/routes/patong-beach-to-phuket-airport",
  "phuket-airport-kata-karon": "/routes/phuket-airport-to-kata-karon",
  "phuket-airport-patong": "/routes/phuket-airport-to-patong-beach",
  "phuket-koh-phi-phi": "/routes/phuket-to-koh-phi-phi",
  "surat-thani-airport-koh-phangan":
    "/routes/surat-thani-airport-to-koh-phangan",
  "surat-thani-airport-koh-samui": "/routes/surat-thani-airport-to-koh-samui",
};

export function GET(request: NextRequest) {
  const from = request.nextUrl.searchParams.get("from") ?? "";
  const to = request.nextUrl.searchParams.get("to") ?? "";
  const routeHref = routeHrefs[`${from}-${to}`] ?? "/routes";
  const destination = new URL(routeHref, request.nextUrl.origin);
  const arrivalTime = request.nextUrl.searchParams.get("arrival_time");
  const passengers = request.nextUrl.searchParams.get("passengers");

  if (arrivalTime) {
    destination.searchParams.set("arrival_time", arrivalTime);
  }

  if (passengers) {
    destination.searchParams.set("passengers", passengers);
  }

  return NextResponse.redirect(destination);
}
