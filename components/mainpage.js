import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Lottie from 'react-lottie-player'
import lottiejson from '/public/mainpage.json'
import styles from './mainpage.module.css'
import {useRouter} from 'next/router';

export default function Mainpage() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/projects');
  };
  return (
    <div className={styles.wrapper}>
      <Grid container spacing={10}>
        <Grid size={5}>
          <div className={styles.introduce}>
            <h2 style={{fontSize:'45px'}}>안녕하세요!</h2>
            <p>안녕하세요! 제 이름은 이민준입니다. 충주에서 자랐고, 현재는 충주에 살고 있습니다.
               저는 IT를 전공했거나 현재 재학중입니다. 학업에 대한 열정을 가지고 있습니다.
               취미로는 볼링을 즐기며, 볼링을 통해 많은 즐거움과 배움을 얻고 있습니다. 여가 시간에는 게임도 즐기곤 합니다.
               제 목표는 볼링장 사업하기이며, 이를 위해 돈을 많이 벌어야 하기 때문에 열심히 공부를 하고 있습니다. 앞으로도 계속해서 발전하고 성장하며, 꿈을 꼭 이루고 싶습니다</p>
            <Button variant="contained" onClick={handleClick}>프로젝트 보러가기</Button>
          </div>
        </Grid>
        <Grid size={7}>
          <div>
            <Lottie
              loop
              animationData={lottiejson}
              play
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}