import { Modal } from "../../uikit/Modal";
import { Button } from "../../uikit/Button";

export function GameOverModal({ winnerName, players }) {
    return (
        <Modal
            isOpen={winnerName}
            onClose={() => {
                console.log("close");
            }}
            width="md"
        >
            <Modal.Header>Title</Modal.Header>
            <Modal.Body>
                <div className="my-4">
                    Победитель{" "}
                    <span className="text-teal-600">{winnerName}</span>
                </div>
                <div className="justify-between grid grid-cols-2 gap-3 mt-2">
                    {players}
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button size="md" variant="outline">
                    Вернуться
                </Button>
                <Button size="md" variant="primary">
                    Играть снова
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
