import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div>
      <div className='quote'>
        <p>"척 보기만 하고 불가능하다고 단정짓는 자들은절대로 알 수 없는, 영혼이 떨리고 공포를 느끼더라도 앞으로 나아갈 수 있는 자들만이 도달할 수 있는 경지가 있다."</p>
        <hr/>
        <span>U1-ASAMi</span><span>&nbsp;</span><span>2014년 8월 1일</span>
      </div>
      <div className='list-item'>
        <input type="checkbox" /><p>TIL 블로그 작성하기</p>
        <p>12:34 완료</p>
      </div>
    </div>
  )
}
