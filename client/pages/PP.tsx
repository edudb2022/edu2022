import React from "react"
import PageLayout from "../components/layouts/page"

const PP = () => {
  return (
    <PageLayout>
      <div className="mt-2 p-2">
        <h1 id="header">私隱政策</h1>
        <ol className="list-decimal">
          <li className="my-2">
            <h4>私隱政策的適用範圍</h4>
            <ul className="list-disc ml-4">
              <li className="my-1">
                私隱政策內容涵蓋
                GoodTurtle.fyi（下稱“本網站”）如何處理本網站收集或接收的個人資料，包括有關用戶瀏覽本網站及使用本網站服務的資料。個人資料指可識別你身分的資料(如你的名字、電郵地址或電話號碼)，及一般非公開的資料。
                私隱政策不適用於並非由本網站擁有或控制的公司政策，也不適用於並非由本網站聘用或管理的人士。
              </li>
            </ul>
          </li>
          <li className="my-2">
            <h4>資料收集及運用</h4>
            <ul className="list-disc ml-4">
              <li className="my-1">
                當你在本網站登記時，我們會問及你的姓名及電郵地址等；涉及某些本網站服務時，我們可能會問及你的其他個人資料，例如電話號碼、姓名、電郵地址及教育履歷等。你可按自己意願提供個人資料，如你未滿18歲，敬請在提供個人資料前，先諮詢家長或監護人。為了能夠向你提供本網站内各類資訊、服務和活動，我們有需要收集該等資料。你雖沒有義務提供有關資料，但如你未能提供有關資料的話，我們或未能向你提供所要求之資訊、服務及活動。你成功在本網站登記，並登入使用我們的服務後，我們便會知悉你的身分。
                本網站會使用資料作以下一般用途：為你提供你所要求的產品或服務、改善我們的服務及與你聯絡。
              </li>
            </ul>
          </li>
          <li className="my-2">
            <h4>資料保密</h4>
            <ul className="list-disc ml-4">
              <li className="my-1">
                本網站所持有的全部個人資料，除法律上有需要外，均屬保密，並只供本網站內部使用。
              </li>
              <li className="my-1">
                除了個人資料外，任何由登記會員，以及訪客在此網頁提出的帖文、留言或其他資料皆被視為非保密性的。
                本網站保留使用、複製、公開、出版、廣播及或張貼非保密性資料於任何地方的權利。
              </li>
              <li className="my-1">
                為了提供您最佳的服務，本網站會在您的電腦中放置並取用我們的
                Cookie，若您不願接受 Cookie
                的寫入，您可在您使用的瀏覽器功能項中設定隱私權等級為高，即可拒絕
                Cookie 的寫入，但可能會導致網站某些功能無法正常執行。
              </li>
            </ul>
          </li>
          <li className="my-2">
            <h4>私隱條例聲明的修訂</h4>
            <ul className="list-disc ml-4">
              <li className="my-1">
                本網站會不時修訂私隱條例聲明，請定時瀏覽本政策以確保你了解最新之內容
              </li>
            </ul>
          </li>
          <li className="my-2">
            <h4>有關私隱政策查詢</h4>
            <ul className="list-disc ml-4">
              <li className="my-1">
                如果你對我們的私隱條例聲明有任何疑問或意見，請電郵至
                admin@goodturtle.fyi與我們聯絡。
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </PageLayout>
  )
}

export default PP
