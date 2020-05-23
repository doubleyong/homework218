/**
 * Created by LuxonD on 2020/5/15.
 */
//set.sort 排版方式
function xiDeSSH(set) {
    function setFN() {
        if(set){
            set.sort = set.sort || {};
            if (set.sort != {}){
                if(set.sort == "center"){
                    $(".xiDe_DengXiangList").addClass("xiDe_DengXiangflexFN");
                }
                else if(set.sort == "toleft"){
                    //toleft为默认样式
                }
                else{
                    console.log("EEROR::'sort' TYPE ERRON 'sort=toleft/center'");
                    return;
                }
            }
        }
    }
    setFN();
    //生成moti
    let x_bodyNode = document.getElementsByTagName("body")[0];
    function xiDe_MotiPrototype() {
        this.bigBoxdiv = document.createElement("div");
        this.xianShiduv = document.createElement("div");
        this.imgNode = document.createElement("img");
        this.endBox = document.createElement("div");
        this.rightMove  = document.createElement("div");
        this.leftMove = document.createElement("div");
        this.init =function () {
            this.bigBoxdiv.className = "xiDe_DengXiangLunBoBox xiDe_LunBoDisend";
            this.xianShiduv.className = "xiDe_DengXiangLunBoXianShiBox";
            this.imgNode.src = "";
            this.endBox.id = "xiDe_DengXingLunBoBoxEnd";
            this.rightMove.id="xiDe_DengXingLunBoBoxMoveRight";
            this.leftMove.id="xiDe_DengXingLunBoBoxMoveLeft";
            this.endBox.innerHTML = "X";
            this.rightMove.innerHTML = "&gt;";
            this.leftMove.innerHTML ="&lt;";
            this.xianShiduv.appendChild(this.imgNode);
            this.xianShiduv.appendChild(this.endBox);
            this.xianShiduv.appendChild(this.rightMove);
            this.xianShiduv.appendChild(this.leftMove);
            this.bigBoxdiv.appendChild(this.xianShiduv);
            x_bodyNode.appendChild(this.bigBoxdiv);
        };
        this.init()
    }
    xiDe_MotiPrototype();
    function xiDe_LunBO() {
        $(".xiDe_DengXiangList>figure").on("click",xiDe_banKuaiDianJi);
        $("#xiDe_DengXingLunBoBoxEnd").on("click",xiDe_motiEnd)
    }
    function xiDe_banKuaiDianJi() {
        $(".xiDe_DengXiangLunBoBox").removeClass("xiDe_LunBoDisend");
        let x_lunBorImgArr = [];
        let x_ImgNodeSrc = $(".xiDe_DengXiangList img");
        for(let i = 0;i < x_ImgNodeSrc.length;i++){
            x_lunBorImgArr.push(x_ImgNodeSrc[i].getAttribute("src"))
        }
        let x_clickImgSrc = $(this).children("img").attr("src");
        let x_LunBoIndex = x_lunBorImgArr.indexOf(x_clickImgSrc);
        $(".xiDe_DengXiangLunBoXianShiBox").children(":nth-child(1)").attr("src",x_clickImgSrc);
        $("#xiDe_DengXingLunBoBoxMoveRight").on("click",function () {
            x_LunBoIndex++;
            if(x_LunBoIndex == x_lunBorImgArr.length-1){
                x_LunBoIndex = 0;
            }
            xiDe_motiMoveR(x_lunBorImgArr,x_LunBoIndex)
        });
        $("#xiDe_DengXingLunBoBoxMoveLeft").on("click",function () {
            x_LunBoIndex--;
            if(x_LunBoIndex == -1){
                x_LunBoIndex = x_lunBorImgArr.length-1;
            }
            xiDe_motiMoveL(x_lunBorImgArr,x_LunBoIndex)
        })
    }
    function xiDe_motiMoveR(x_lunBorImgArr,x_LunBoIndex) {
        $(".xiDe_DengXiangLunBoXianShiBox").children(":nth-child(1)").attr("src",x_lunBorImgArr[x_LunBoIndex]);
    }
    function xiDe_motiMoveL(x_lunBorImgArr,x_LunBoIndex) {
        $(".xiDe_DengXiangLunBoXianShiBox").children(":nth-child(1)").attr("src",x_lunBorImgArr[x_LunBoIndex]);
    }
    function xiDe_motiEnd() {
        $(".xiDe_DengXiangLunBoBox").addClass("xiDe_LunBoDisend")
    }
    xiDe_LunBO()
}