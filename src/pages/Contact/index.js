import "./styles.scss";
import "../../index.scss";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export const Contact = () => {
  return (
    <div className="contact__wrapper">
      <div className="contact__text-zone">
        <h1>CONTACT ME</h1>
        <div className="contact__form-wrapper">
          <form>
            <ul>
              <li className="contact__form">
                <input
                  className="input"
                  placeholder="Name"
                  type="text"
                  name="name"
                  required
                />
              </li>
              <li className="contact__form">
                <input
                  placeholder="E-mail"
                  className="input"
                  type="email"
                  name="email"
                  required
                />
              </li>
              <li className="contact__form">
                <input
                  className="input"
                  placeholder="Subject"
                  type="text"
                  name="subject"
                  required
                />
              </li>
              <li className="contact__form">
                <textarea
                  className="textarea"
                  placeholder="Message"
                  name="message"
                  required
                ></textarea>
              </li>

              <li className="contact__form input1 button">
                <input className="input submit" type="submit" value="SEND" />
              </li>
            </ul>
          </form>
        </div>
      </div>

      <div className="contact__map-wrapper">
        <MapContainer center={[51.803722, 16.316945]} zoom={14}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[51.803722, 16.316945]}>
            <Popup>Hello!</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};
