# Card Number Validation API

## Note: Hosted on Render's free tier. If the service has been idle, please allow up to 30 seconds for the initial request to spin up the container.

🟢 **Live API Endpoint:** [https://cardvalidation-66pc.onrender.com/api/validate](https://cardvalidation-66pc.onrender.com/api/validate)

A lightweight REST API built with Node.js, Express, and TypeScript to validate credit card numbers using the Luhn Algorithm.

## Tech Stack
- **Runtime:** Node.js
- **Framework:** Express.js
- **Language:** TypeScript (Strict Mode)
- **Testing:** Jest
- **Deployment:** Render

---

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

### Available Scripts

*   `npm run dev`: Starts the local development server with hot-reloading (via `tsx`).
*   `npm test`: Runs the automated Jest unit testing suite.
*   `npm run build`: Compiles the TypeScript code into JavaScript for production.
*   `npm start`: Runs the compiled production build.

---

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
*   **Framework Choice (Express.js):** Chose Express over larger frameworks like NestJS because this microservice currently only requires a single endpoint. Express keeps the footprint lightweight and minimizes unnecessary boilerplate.
*   **Strict TypeScript & Modern Tooling:** Configured with `"strict": true` to ensure robust type safety. Utilized ES Modules and `tsx` for a fast, modern local development experience.
*   **String Data Type for Card Numbers:** Credit card numbers can be up to 19 digits long, which exceeds JavaScript's `MAX_SAFE_INTEGER`. Accepting the input as a string prevents data mutation and allows for safer regex parsing.
*   **Strict Input Validation:** The API enforces a strict input format, explicitly rejecting unexpected characters (like letters or dashes) before math execution, simulating frontend sanitization expectations.
*   **Luhn Algorithm (Mod 10):** The core validation logic runs via a custom, stateless utility function that verifies the mathematical integrity of the card number.
*   **Automated Testing:** Implemented a Jest test suite to cover pure validation logic, ensuring edge cases (like invalid characters and mathematical failures) are safely caught.