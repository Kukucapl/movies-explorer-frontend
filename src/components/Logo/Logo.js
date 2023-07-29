import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <div className="logo">
      <Link className="logo__link" to="/" />
    </div>

  );
};