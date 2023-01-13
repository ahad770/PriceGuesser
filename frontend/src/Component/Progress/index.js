import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import * as S from "./style";

export const StyledLinearProgress = styled(LinearProgress)(() => ({
  height: 20,
  // width: '60%',
  borderRadius: 15,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#F9F6FF",
  },
}));

function LinearProgressWithLabel(props) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', justifyContent: 'center' }}>
      <Box sx={{ width: '60%', mr: 1 }}>
        <StyledLinearProgress variant="determinate" {...props} />
      </Box>
      <div>
        <S.RoundLabel>Round</S.RoundLabel>
        <S.RoundLabel>{`${Math.round(
          props.value/20,
        )}`} / 5</S.RoundLabel>
      </div>
    </div>
  );
}

export default function LinearWithValueLabel({ value }) {
    return (
      <div>
        <LinearProgressWithLabel value={Math.min(value, 100)} />
      </div>
    );
  }