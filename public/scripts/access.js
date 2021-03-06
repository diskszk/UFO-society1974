const db = firebase.firestore();
const DOC_ID = "ufosociety_accesscount_db_id";
const countRef = db.collection("data").doc(DOC_ID);
let fetchedCount = 0;

// DOM操作定義
const displayCount = (count) => {
  const counter = document.getElementById("accessCounter");
  counter.innerHTML = count;
};

// アクセス時に値を更新してDOMを変更する
const updateDate = async (currentCount) => {
  const newCount = currentCount + 1;
  await countRef
    .update({
      count: newCount,
    })
    .then(() => {
      displayCount(newCount);
    });
};

// DBの値を取得-> update関数に渡す -> DOM操作実行
const listenData = async () => {
  try {
    const fetched = await countRef.get();
    const fetchedCount = fetched.data().count;
    await updateDate(fetchedCount);

    await db.app.delete();
  } catch {
    alert(
      "データの取得に失敗しました。\n通信環境をご確認の上再度お試しください。"
    );
  }
};

// 実行
listenData();
