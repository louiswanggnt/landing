# API 串接說明文件 (API Integration Guide)

本文件說明如何將「2026 無創科技美容課程」報名表單串接到您的後端系統。

## 1. 環境變數設定

請在您的部署環境中設定以下環境變數：

- `VITE_API_ENDPOINT`: 您的後端 API 接口網址 (例如：Google Apps Script, Node.js API, Firebase 等)。
- `VITE_GOOGLE_FORM_URL`: 您的 Google 表單備援網址。

## 2. 資料格式約定 (API Payload)

表單送出時，會以 `POST` 方法發送 `application/json` 格式的資料。

### Request Body 範例

```json
{
  "name": "王小明",
  "phone": "0912345678",
  "email": "xiaoming@example.com",
  "qualification": "乙級美容師"
}
```

### 欄位說明

| 欄位名稱 (Key) | 資料類型 | 說明 | 範例值 |
| :--- | :--- | :--- | :--- |
| `name` | String | 報名者姓名 | "王小明" |
| `phone` | String | 報名者手機號碼 | "0912345678" |
| `email` | String | 報名者電子郵件 | "xiaoming@example.com" |
| `qualification` | String | 目前資歷 (單選) | "學校老師", "乙級美容師", "美容從業人員", "有興入職者" |

## 3. 後端處理建議

### Google Apps Script (GAS) 範例

如果您使用 GAS 作為後端，可以使用以下程式碼片段：

```javascript
function doPost(e) {
  var params = JSON.parse(e.postData.contents);
  var name = params.name;
  var phone = params.phone;
  var email = params.email;
  var qualification = params.qualification;
  
  // 將資料寫入試算表
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sheet.appendRow([new Date(), name, phone, email, qualification]);
  
  return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
}
```

### CORS 處理

前端預設使用 `mode: "no-cors"` 以確保在跨網域請求時（如 Google Script）不會因為 CORS 限制而報錯。如果您有自己的後端伺服器，建議在後端正確設定 CORS Header，並將前端的 `mode` 改為 `cors`。

## 4. 備援機制

如果您的 API 暫時無法使用，頁面上已提供「前往 Google 表單報名」的按鈕作為備援方案。請確保 `VITE_GOOGLE_FORM_URL` 已正確設定。
