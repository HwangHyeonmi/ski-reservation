import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

interface cardProps {
  id?: number;
  name?: string;
  region?: string;
  score?: number;
  review?: number;
  onClick?: () => void;
}

export default function CustomCard({
  onClick,
  id,
  name,
  region,
  score,
  review,
}: cardProps) {
  return (
    <Card onClick={onClick} sx={{ maxWidth: 250, margin: "15px" }}>
      <CardContent style={{padding:0}}>
        <div style={{ width: "250px", height: "250px", overflow: "hidden" }}>
          {id && (
            <img
              alt="lecturer"
              style={{ width: "100%" }}
              src={`/images/lecturer/lecturer${id}.jpg`}
            />
          )}
        </div>
        <div style={{padding:"10px", boxSizing:"border-box"}}>
          <div>{name} 강사님</div>
          <br />
          <Typography variant="body2" color="text.first">
            {` ${region}`}
          </Typography>
          <br />
          <Typography variant="body2" color="text.secondary">
        평점 : <Rating style={{fontSize:"1rem",top:"2px"}} name="read-only" value={score} readOnly /> 
        | {`리뷰 : ${review}개`}
          </Typography>
       
         
        </div>
      </CardContent>
    </Card>
  );
}
