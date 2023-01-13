import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import * as S from "./style";

function ItemModal({
  setOpen,
  open,
  handleChangeItem,
  itemToDisplay,
  roundScore,
  guess,
  setGuess,
  round,
  handleEndGame,
  gameMode,
}) {
  const style = {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#121212",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const handleClose = () => {
    setOpen(false);
    setGuess("");
    if ((round < 5 && gameMode === "classic") || gameMode === "round")
      handleChangeItem();
    else handleEndGame();
  };

  const pickHex = (color1, color2, weight) => {
    var w1 = weight;
    var w2 = 1 - w1;
    var rgb = [
      Math.round(color1[0] * w1 + color2[0] * w2),
      Math.round(color1[1] * w1 + color2[1] * w2),
      Math.round(color1[2] * w1 + color2[2] * w2),
    ];
    return rgb;
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{ textAlign: "center" }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Box sx={style}>
            <div>
              <img
                src={itemToDisplay?.img}
                alt=""
                style={{ width: "10rem", height: "auto" }}
              />
            </div>
            <div style={{ marginLeft: "2rem" }}>
              <S.CustomHeader>{itemToDisplay?.store}</S.CustomHeader>
              <S.CustomSubHeader>{itemToDisplay?.name}</S.CustomSubHeader>
              <div
                style={{ display: "flex", gap: "1.5rem", marginBottom: "1rem" }}
              >
                <div style={{ flexDirection: "column" }}>
                  <S.CustomLabel>Actual price</S.CustomLabel>
                  <S.CustomPriceLabel>
                    ${itemToDisplay?.price}
                  </S.CustomPriceLabel>
                </div>
                <div style={{ flexDirection: "column" }}>
                  <S.CustomLabel>Guess price</S.CustomLabel>
                  <S.CustomPriceLabel>${guess}</S.CustomPriceLabel>
                </div>
              </div>
              {gameMode === "classic" ? (
                <S.CustomPointLabel
                  style={{
                    color: `rgb(${pickHex(
                      [50, 205, 50],
                      [255, 0, 0],
                      1 -
                        Math.abs(guess - itemToDisplay?.price) /
                          itemToDisplay?.price
                    )})`,
                  }}
                >
                  +{roundScore} points earned
                </S.CustomPointLabel>
              ) : (
                <S.CustomPointLabel>+ Next Round</S.CustomPointLabel>
              )}
              <S.CustomButtom variant="contained" onClick={handleClose}>
                Next
              </S.CustomButtom>
              <S.CustomLink href={itemToDisplay?.link} target="_blank">
                Shop the look?
              </S.CustomLink>
            </div>
          </Box>
        </div>
      </Modal>
    </div>
  );
}

export default ItemModal;
