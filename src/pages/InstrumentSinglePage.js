import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function InstrumentSinglePage(props) {
  //const id = props.match.params.hangszerId;
  const param = useParams();
  const id = param.hangszerId;

  const [instrument, setInstrument] = useState({});
  const [isPending, setPending] = useState(false);

  useEffect(() => {
    setPending(true);
    (async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_INSTRUMENT_URL}/api/instruments/${id}`,
          { credentials: "include" }
        );
        const hangszer = await res.json();
        setInstrument(hangszer);
      } catch (e) {
        console.log(e);
      } finally {
        setPending(false);
      }
    })();
  }, [id]);

  return (
    <div className="p-5  m-auto text-center content bg-lavender">
      {isPending || !instrument.id ? (
        <div className="spinner-border"></div>
      ) : (
        <div className="card p-3">
          <div className="card-body">
            <h4>{instrument.brand}</h4>
            <h5 className="card-title">{instrument.name}</h5>
            <div className="lead">{instrument.price} ft</div>
            <p>Készleten: {instrument.quantity} db</p>
            <img
              className="img-fluid rounded"
              style={{ maxHeight: "500px" }}
              src={
                instrument.imageURL
                  ? instrument.imageURL
                  : "https://via.placeholder.com/400x800"
              }
              alt={instrument.name}
            />
          </div>
        </div>
      )}
    </div>
  );
}
