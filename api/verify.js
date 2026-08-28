export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { code } = req.body;

  const CORRECT_CODE = process.env.CORRECT_CODE || "204815";
  const SECRET_LINK = process.env.SECRET_LINK || "https://google.com";

  if (code === CORRECT_CODE) {
    return res.status(200).json({ success: true, redirectUrl: SECRET_LINK });
  } else {
    return res.status(401).json({ success: false, message: 'Invalid Code' });
  }
}
