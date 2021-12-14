import { useAppSelector } from '../redux/hooks'

export default function InfoBox() {
    const info = useAppSelector(state => state.info.info)

    return (
        <div>
            <ul className="InfoBoxContent">
                {
                    info && info.map((a, i) => <li key={i}>
                        {a}
                    </li>)

                }
            </ul>
        </div>
    )
}
