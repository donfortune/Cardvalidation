# Card Number Validation API

A lightweight REST API built with Node.js, Express, and TypeScript to validate credit card numbers using the Luhn Algorithm.

## Setup and Installation

1. **Clone the repository:**
```bash
git clone <your-repo-url>
cd <your-repo-folder>
```

2. **Install dependencies:**
```bash
npm install express
npm install -D typescript ts-node @types/node @types/express
```

3. **Run in development mode:**
```bash
npx ts-node index.ts
```

---

## API Reference

### Validate Card
Determines if a provided credit card number is valid based on the Luhn Algorithm.

**Endpoint:** `POST /api/validate`

**Request Body:**
```json
{
  "cardNumber": "4532 1234 5678 9101"
}
```

**Success Response (200 OK - Valid Card):**
```json
{
  "valid": true,
  "message": "Card number is valid."
}
```

**Success Response (200 OK - Invalid Card):**
```json
{
  "valid": false,
  "message": "Card number is invalid."
}
```

**Error Response (400 Bad Request):**
```json
{
  "error": "Bad Request",
  "message": "The 'cardNumber' field is required and must contain valid digits."
}
```

---

## Design Decisions

- **Framework Choice (Express.js):** Chose Express over NestJS because this microservice currently only requires a single endpoint. Express keeps the footprint lightweight and minimizes unnecessary boilerplate.
- **Strict TypeScript:** Configured with `"strict": true` to ensure robust type safety and catch edge cases at compile time, meeting assessment requirements.
- **String Data Type for Card Numbers:** Credit card numbers can be up to 19 digits long, which exceeds JavaScript's `MAX_SAFE_INTEGER`. Accepting the input as a string prevents data mutation and allows the API to easily sanitize user inputs that might include spaces or dashes.
- **Algorithm:** The validation logic implements the industry-standard Luhn Algorithm (Mod 10) to verify the mathematical integrity of the card number.