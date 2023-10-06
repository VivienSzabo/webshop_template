import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function InstrumentCreatePage() {

  const  [t, i18n] = useTranslation("global");

  const navigate = useNavigate();

  return (
    <div className="p-5 content bg-whitesmoke text-center">
      <h2>{t("newInstrumentPage.title")}</h2>
      <form
        onSubmit={(e) => {
          e.persist();
          e.preventDefault();
          fetch(process.env.REACT_APP_INSTRUMENT_URL + "/api/instruments", {
            method: "POST",
            credentials: "include",
            body: JSON.stringify({
              name: e.target.elements.name.value,
              price: e.target.elements.price.value,
              quantity: e.target.elements.quantity.value,
              imageURL: e.target.elements.imageURL.value,
            }),
          })
            .then(() => {
              navigate("/");
            })
            .catch(console.log);
        }}
      >
        <div className="form-group row pb-3">
          <label className="col-sm-3 col-form-label">{t("newInstrumentPage.name")}:</label>
          <div className="col-sm-9">
            <input type="text" name="name" className="form-control" />
          </div>
        </div>
        <div className="form-group row pb-3">
          <label className="col-sm-3 col-form-label">{t("newInstrumentPage.prise")}:</label>
          <div className="col-sm-9">
            <input type="number" name="price" className="form-control" />
          </div>
        </div>
        <div className="form-group row pb-3">
          <label className="col-sm-3 col-form-label">{t("newInstrumentPage.piece")}:</label>
          <div className="col-sm-9">
            <input type="number" name="quantity" className="form-control" />
          </div>
        </div>
        <div className="form-group row pb-3">
          <label className="col-sm-3 col-form-label">{t("newInstrumentPage.imageUrl")}:</label>
          <div className="col-sm-9">
            <input type="text" name="imageURL" className="form-control" />
          </div>
        </div>
        <button type="submit" className="btn btn-success">
        {t("newInstrumentPage.button")}
        </button>
      </form>
    </div>
  );
}
