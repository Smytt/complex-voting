import { useState } from "react";
import { Button, Spinner } from "react-bootstrap";

const ButtonWithLoading = ({ handler, text }) => {

  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    setLoading(true)
    await handler();
    setLoading(false);
  }

  return (
    <Button
      className="w-100 my-2"
      variant="info"
      onClick={handleSubmit}
      disabled={loading}
    >
      {loading ? <Spinner animation="grow" size="sm" className="m-auto" /> : text}
    </Button>
  )
}

export default ButtonWithLoading;