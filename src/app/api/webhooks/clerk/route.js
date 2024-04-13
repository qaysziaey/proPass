import { clerkClient } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { WebhookEvent } from "@clerk/nextjs/server";
import { headers } from "next/headers";
import { Webhook } from "svix";

import { createUser } from "@/lib/actions/user.action";

export async function POST(request) {
  const webhook = new Webhook(process.env.WEBHOOK_SECRET);
}
