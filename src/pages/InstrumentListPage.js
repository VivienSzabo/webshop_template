import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";


export function InstrumentListPage() {
  const [instruments, setInstruments] = useState([]);
  const [isFetchPending, setFetchPending] = useState(false);

  const  [t, i18n] = useTranslation("global");

  useEffect(() => {
    setFetchPending(true);
    fetch(`${process.env.REACT_APP_INSTRUMENT_URL}/api/instruments`, { credentials: "include" })
      .then((res) => res.json())
      .then((hangszerek) => setInstruments(hangszerek))
      .catch(console.log)
      .finally(() => {
        setFetchPending(false);
      });
  }, []);

  return (
    <div className="p-5  m-auto text-center content bg-ivory">
      {isFetchPending ? (
        <div className="spinner-border"></div>
      ) : (
        <div>
          <h2>{t("instrumentListPage.title")}</h2>
          {instruments.map((instrument) => (
            <NavLink key={instrument.id} to={"/hangszer/" + instrument.id}>
              <div className="card col-sm-3 d-inline-block m-1 p-2">
                <h6 className="text-muted">{instrument.brand}</h6>
                <h5 className="text-dark">{instrument.name}</h5>
                <div>{instrument.price} ft -</div>
                <div className="small">{t("instrumentListPage.stock")}: {instrument.quantity} {t("instrumentListPage.piece")}</div>
                <div className="card-body">
                  <img
                    className="img-fluid"
                    style={{ maxHeight: 200 }}
                    src={instrument.imageURL ? instrument.imageURL : "https://via.placeholder.com/400x800"}
                    alt={instrument.name}
                  />
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}
 

    