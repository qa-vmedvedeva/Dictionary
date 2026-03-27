import Plate from "../../ui/Plate";
export default function GamesPage() {
    return(
        <div >
            <h1>Игры на запоминание слов</h1>
            <div className="bunch">
                <Plate
                    variant="accent"
                >Apple
                </Plate>
                <Plate
                    variant="success"
                >Bear
                </Plate>
                <Plate
                    variant="danger"
                >Moon
                </Plate>
                <Plate
                    variant="default"
                >Moonshinedccs
                </Plate>
            </div>
        </div>
    )
}