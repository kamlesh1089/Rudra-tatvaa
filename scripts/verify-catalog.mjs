import fs from 'node:fs';
const services = JSON.parse(fs.readFileSync(new URL('../lib/services.json', import.meta.url)));
const ids = services.map(x => x.id);
if (services.length !== 30 || new Set(ids).size !== ids.length) {
  throw new Error(`Expected 30 unique services; got ${services.length} rows and ${new Set(ids).size} unique IDs`);
}
for (const s of services) if (!s.title || !Number.isFinite(s.price) || s.price <= 0) {
  throw new Error('Invalid service: ' + s.id);
}
console.log(`Verified ${services.length} unique service variants.`);
