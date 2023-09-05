import classNames from 'classnames';


type hamburgerMenu ={
  hamburger: boolean,
  burgerF: () => void
}
export default function Hamburger(props: hamburgerMenu) {
  return (
    <div className={classNames(`tham tham-e-spin tham-w-8 z-10 lg:hidden`, { 'tham-active': props.hamburger })} onClick={props.burgerF}>
      <div className="tham-box">
        <div className="tham-inner bg-black" />
      </div>
    </div>
  )
}
