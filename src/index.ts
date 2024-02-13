import { Voice } from "@signalwire/realtime-api";

const client = new Voice.Client({
  project: "<project-id>",
  token: "<api-token>",
  topics: ["office"],
});

client.on("call.received", async (call: Voice.Call) => {
  console.log("Got call", call.from, call.to);

  try {
    await call.answer();
    console.log("Inbound call answered");

    await call.playTTS({ text: "Hello! This is a test call." });
  } catch (error) {
    console.error("Error answering inbound call", error);
  }
});