import { useLocation, useNavigate, useParams } from "react-router"
import SimpleBottomNavigation from "../components/Navigation";
import { Grid } from "@mui/material";

export default function ProductDetails() {
    let { state } = useLocation();
    console.log(useLocation())

    let { id } = useParams();

    const navigate = useNavigate()

    return (
        <div className="detailed-content">
            <div>
                <button className="back" onClick={() => navigate('/products')}>Voltar</button>
                <div>
                    <img className="detailed-image" src={state.p.image} alt="" />
                </div>
                <div>
                    <h2>{state.p.title} - {id}</h2>
                    <p>{state.p.descricao}</p>
                </div>
                {/* https://mui.com/material-ui/react-grid/ */}
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ border: '1px solid red', height: 200 }}>
                    <SimpleBottomNavigation />
                    <SimpleBottomNavigation />
                    <SimpleBottomNavigation />
                </Grid>
            </div>
        </div>
    )
}