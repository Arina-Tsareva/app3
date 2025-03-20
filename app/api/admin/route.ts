import { getSession } from "next-auth/react";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const session = await getSession({ req });

  if (!session?.user?.role || session.user.role !== "admin") {
    return new NextResponse("Forbidden", { status: 403 });
  }

  return new NextResponse("Admin Data", { status: 200 });
}

export async function POST(req: NextRequest) {
  const session = await getSession({ req });

  if (!session?.user?.role || session.user.role !== "admin") {
    return new NextResponse("Forbidden", { status: 403 });
  }

  return new NextResponse("Admin Post", { status: 200 });
}
