import {NextResponse} from 'next/server';
// Deliberately disabled until an independent DB, concurrency-safe scheduler,
// OTP verification, payment gateway and transactional confirmation are configured.
// Never accept or store PII via a partial implementation.
export async function POST(){return NextResponse.json({error:'Booking service not yet configured. No booking was created or payment collected.'},{status:503});}
export async function GET(){return NextResponse.json({error:'Not available'},{status:404});}
