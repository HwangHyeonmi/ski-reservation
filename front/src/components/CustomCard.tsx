import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

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
    <Card onClick={onClick} sx={{ maxWidth: 345, margin: "15px" }}>
      <CardContent>
        <div style={{ width: "300px", height: "300px", overflow: "hidden" }}>
          {id && (
            <img
              alt="lecturer"
              style={{ width: "100%" }}
              src={`/images/lecturer/lecturer${id}.jpg`}
            />
          )}
        </div>
        <div>{name} 강사님</div>
        <br />
        <Typography variant="body2" color="text.first">
          {`위치 ${region}`}
        </Typography>
        <br />
        <Typography variant="body2" color="text.secondary">
          {`평점${score}`} {`리뷰${review}`}
        </Typography>
      </CardContent>
    </Card>
  );
}
