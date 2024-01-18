import "./Button.css";

export default function Button({ href, text }) {
  return href ? (
    <a href={href} className="button">
      {text}{" "}
    </a>
  ) : (
    <button type="button" className="button">
      {text}
    </button>
  );
}
