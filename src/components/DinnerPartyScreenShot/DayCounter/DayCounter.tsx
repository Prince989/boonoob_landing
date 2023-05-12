interface Props{
    title : string,
    number : string | number
}

export default function DayCounter(props : Props) {
    const {title,number} = props;

  return (
    <div className="flex flex-col text-sm text-white mx-2 items-center">
        <span className="font-semibold">
            {number}
        </span>
        <span className="font-medium" style={{fontSize : "10px"}}>
            {title}
        </span>
    </div>
  )
}
