// app/routes/api/create-trip.ts
export default function handler() {
  return new Response(JSON.stringify({ message: "Trip created" }), {
    headers: { "Content-Type": "application/json" },
  });
}
