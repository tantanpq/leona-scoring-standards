# Chấm ý tưởng kinh doanh — Business Idea Scoring V4

Chấm **ý tưởng kinh doanh / startup giai đoạn sớm** trên thang **/100**: sức hấp dẫn thương mại và mức sẵn sàng để kiểm chứng tiếp.
Trọng số V4 (F3 còn tạm thời, chưa hiệu chuẩn). Mọi ngưỡng đều là **PRIOR**.

**Cách tính:** Tổng = Σ(trọng số × điểm tiêu chí) / 100. Mỗi tiêu chí chấm theo mốc 0 / 25 / 50 / 75 / 100.
Thiếu bằng chứng: **50** (MISSING), giữ nguyên trọng số.

> **Tuyên bố trung thực (đọc trước khi dùng):** với ngưỡng 65, thang này đã loại Airbnb (45.3), Stripe (59.0), Figma (47.5) và Calendly (40.3) ở thời điểm founding. Nó lọc ý tưởng dở tốt; nó không tìm được winner. Điểm dưới 65 với ý tưởng tạo-category mới **không phải tín hiệu kill** — đưa qua cổng nhận định con người.

## Bảng 15 tiêu chí

| ID | Tiêu chí | W |
|---|---|---:|
| F1 | Market Frame — khung thị trường vẽ có đúng không | 12 |
| F2 | Why Now — tại sao là bây giờ | 7 |
| C3 | Cấu trúc ngành — Porter 5 forces | 7 |
| C4 | Defensibility & moat | 4 |
| C5 | Mô hình kinh doanh có khả thi không | 7 |
| C6 | Unit economics & đường tới lợi nhuận | 8 |
| C7 | Founder-market fit | 10 |
| C8 | Khả năng scale / công sức / thời gian tới doanh thu | 7 |
| C9 | Rủi ro — 5 nhóm (regulatory, tech, market, execution, financial) | 6 |
| C10 | Thực tế nhu cầu thị trường (người ta có đang trả tiền cho giải pháp thay thế?) | 8 |
| C11 | Traction của founder | 4 |
| C12 | Nhu cầu vốn & độ hợp hình thức gọi vốn | 5 |
| F3 | Dự báo quỹ đạo category 3–5 năm | 6 |
| C13 | Tiềm năng M&A / exit chiến lược | 2 |
| C14 | Go-to-market: kênh phân phối & khả năng lặp lại | 7 |

## F1. Market Frame (12)

Hỏi trước: **khung thị trường vẽ có đúng không?** Sizing chỉ có nghĩa sau khi frame đúng.
- Phải có buyer unit đếm được × giá. Bottom-up cho SAM/SOM từ nguồn đếm có ngày tháng; top-down chỉ chấp nhận cho TAM.
- Derived-bar test: SOM có clear được doanh thu mục tiêu ở leader share ≤30% không?
- Tách riêng expansion pool (non-buyers) với barrier arithmetic — không inflate SAM bằng %.

| Điểm | Mốc |
|---:|---|
| 0 | Không có buyer unit đếm được; sizing là "% của thị trường khổng lồ"; hoặc frame bị bằng chứng phản bác. |
| 25 | Có buyer unit nhưng đếm yếu; SAM/SOM đoán %; chưa qua derived-bar test. |
| 50 | Bottom-up SAM/SOM có nguồn đếm; SOM gắn với CAC/capacity; giả thuyết expansion được đặt tên và theo dõi. |
| 75 | Buyer unit rõ + nguồn đếm độc lập; qua derived-bar; expansion pool tách riêng với barrier arithmetic. |
| 100 | Triangulated: 2+ nguồn đếm độc lập; expansion pool có early evidence; frame đứng vững khi reframe ngược. |

## F2. Why Now (7)

**Tại sao là bây giờ?** Checklist 8 tín hiệu: enabling-cost crossover (Wright's law, cắt ngưỡng trong runway?), infra readiness (>50% penetration?), behavior evidence (≥1M người đã làm bản inferior?), regulatory window (ngày cố định?), hype-cycle position (chỉ dùng cho funding climate), incumbent blind spot, crisis/supply shock, 5-year asymmetry test (5 năm trước build được không? 5 năm nữa cửa sổ có đóng không?).

| Điểm | Mốc |
|---:|---|
| 0 | Không có "why now" nào — hoặc regulation cấm. |
| 25 | Chỉ 1 tín hiệu yếu (hype) mà thiếu tín hiệu kinh tế/hành vi; hoặc vào muộn thị trường bão hòa. |
| 50 | 2–3 tín hiệu trung bình nhưng cost crossover chưa trong runway; hoặc tín hiệu mâu thuẫn. |
| 75 | Timing stack rõ: ≥2 tín hiệu mạnh; trả lời được "sao không phải 5 năm trước/sau". |
| 100 | Timing stack đầy đủ + bất đối xứng: cost crossover đúng ramp, infra >50%, behavior evidence mạnh, regulatory tailwind có ngày. |

## F3. Category Trajectory Forecast 3–5y (6) — *trọng số tạm thời, chưa hiệu chuẩn*

Chấm **chất lượng của việc dự báo**, không chấm lạc quan/bi quan. Dự báo input (cost curves, adoption indicators, policy dates), không dự báo output. Direction + order of magnitude, dạng scenario/bracket — cấm point estimate từ 1 nguồn analyst.

| Điểm | Mốc |
|---:|---|
| 0 | Không có forecast input nào; chỉ có point estimate từ 1 nguồn analyst. |
| 25 | Có 1 input yếu, không có cost curve / adoption indicator / policy date. |
| 50 | Có direction + ≥1 input đo được, nhưng chưa thành scenario. |
| 75 | Base/bull/bear hoặc bracket range, mỗi case có input đo được; nêu watch variables và giới hạn. |
| 100 | Triangulated: cost curve có learning rate đo được + adoption indicators đồng thuận + policy dates cố định; chiến lược thắng ở ≥2 scenario. |

## C3–C14 (mô tả ngắn — anchors chi tiết giữ nguyên V3)

- **C3. Porter 5 forces (7):** rào cản gia nhập, sức mạnh nhà cung cấp/khách hàng, đe dọa thay thế, cạnh tranh hiện tại. ≥2 lực bất lợi vì rào cản thấp → viết counter-hypothesis tấn công + test rẻ.
- **C4. Defensibility (4):** tài nguyên khó copy: network effects, data, brand, switching cost, cơ chế user-affinity đã đo được (không cần patent mới được 50).
- **C5. Mô hình kinh doanh (7):** ai trả tiền, trả bao nhiêu, trả khi nào, unit of value rõ không.
- **C6. Unit economics (8):** margin, LTV/CAC, payback; đường tới lợi nhuận có cơ sở không.
- **C7. Founder-market fit (10):** hiểu domain, năng lực thực thi liên quan, tiếp cận khách hàng, hành vi học hỏi — quan sát được, không suy từ bằng cấp/quan hệ.
- **C8. Scale & time to revenue (7):** mở rộng có tuyến tính với công sức không; bao lâu tới đồng doanh thu đầu tiên.
- **C9. Risk register (6):** 5 nhóm regulatory / technology / market / execution / financial. Điểm cao = rủi ro dư thấp hoặc được kiểm soát tốt.
- **C10. Market demand reality (8):** người mua có đang trả tiền cho giải pháp thay thế không — bằng chứng willingness-to-pay, không phải survey "tôi sẽ mua".
- **C11. Founder traction (4):** tín hiệu validation đã làm được. Cố ý nhẹ để không phạt oan ý tưởng sớm.
- **C12. Capital fit (5):** cần bao nhiêu vốn, hình thức vốn nào hợp (bootstrap / angel / VC / debt).
- **C13. M&A potential (2):** tiền lệ M&A và acquirer chiến lược trong category.
- **C14. Go-to-market (7):** kênh phân phối đã nêu tên + giả thuyết test được trong ngân sách validation.

## Quy tắc chấm

- **Một quan sát, một chủ:** cùng một fact không cộng/trừ điểm ở hai tiêu chí.
- **Asymmetric Upside (lens, không vào điểm):** nếu X đúng thì business trông như Y với economics Z — phân loại CONVEX (sai thì lỗ có giới hạn, đúng thì thắng lớn) / CONCAVE.
- **Tracked Bets:** mọi uncertainty lớn ghi thành bet có giả thuyết + trigger kiểm chứng rẻ + ngày chấm lại. Bet đang mở = 0 điểm cộng thêm.
- Điểm số không phải xác suất thành công, không phải khuyến nghị đầu tư.

---
*Chuẩn Leona — Business Idea Scoring V4 (PRIOR). Dùng miễn phí trên web: https://free-ai-tools-hub.vercel.app (URL tạm — sẽ cập nhật domain chính thức).*
