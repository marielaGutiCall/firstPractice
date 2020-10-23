//import '../styles/styles.css';

const MyFirstView = () => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div
          style={{
            width: "350px",
            height: "350px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            boxShadow: "0 2px 2px rgba(0,0,0,.24), 0 0 2px rgba(0,0,0,.12)",
            margin: "0 7px",
            padding: "15px",
          }}
        >
          <div
            style={{
              padding: "15px",
              width: "100%",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <label style={{ display: "block" }}>Correo Electrónico</label>
            <input
              style={{
                position: "relative",
                borderRadius: "5px",
                width: "100%",
                border: 0,
                backgroundColor: "#fff",
                height: "30px",
                border: "1px solid #a6a6a6",
              }}
            />
          </div>
          <div
            style={{
              padding: "15px",
              width: "100%",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <label style={{ display: "block" }}>Contraseña </label>
            <input
              style={{
                position: "relative",
                borderRadius: "5px",
                width: "100%",
                border: 0,
                backgroundColor: "#fff",
                height: "30px",
                border: "1px solid #a6a6a6",
              }}
            />
          </div>
          <button
            style={{
              padding: "10px",
              backgroundColor: "#464775",
              minWidth: "130px",
              height: "40px",
              borderRadius: "5px",
              boxShadow: "0 2px 2px rgba(0,0,0,.24), 0 0 2px rgba(0,0,0,.12)",
              margin: "0 7px",
              color: "#fff",
              border: 0,
            }}
          >
            Iniciar Sesión
          </button>
        </div>
      </div>
    );
}

export default MyFirstView;
