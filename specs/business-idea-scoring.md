# Chấm ý tưởng kinh doanh — Business Idea Scoring V4

Chấm **ý tưởng kinh doanh / startup giai đoạn sớm** trên thang **/100**: sức hấp dẫn thương mại và mức sẵn sàng để kiểm chứng tiếp.
Trọng số V4 (F3 còn tạm thời, chưa hiệu chuẩn). Mọi ngưỡng đều là **PRIOR**.

**Cách tính:** Tổng = Σ(trọng số × điểm tiêu chí) / 100. Mỗi tiêu chí chấm theo mốc 0 / 25 / 50 / 75 / 100.
Thiếu bằng chứng: **50** (MISSING), giữ nguyên trọng số.

> **Tuyên bố trung thực (đọc trước khi dùng):** với ngưỡng 65, thang này đã loại Airbnb (45.3), Stripe (59.0), Figma (47.5) và Calendly (40.3) ở thời điểm founding. Nó lọc ý tưởng dở tốt; nó không tìm được winner. Điểm dưới 65 với ý tưởng tạo-category mới **không phải tín hiệu kill** — đưa qua cổng nhận định con người.

## Bảng 15 tiêu chí

| ID | Tiêu chí | W |
|---|---|---:|
| C1 | Why Now — tại sao là bây giờ | 7 |
| C2 | Market Frame — khung thị trường vẽ có đúng không | 12 |
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
| C13 | Tiềm năng M&A / exit chiến lược | 2 |
| C14 | Go-to-market: kênh phân phối & khả năng lặp lại | 7 |
| F3 | Dự báo quỹ đạo category 3–5 năm | 6 |

**Nguồn anchors và phạm vi chấm:** bản triển khai [prompt-builder.js tại commit `1925d2489b2e54cc14411cf598d68e4762973fc1`](https://github.com/tantanpq/business-idea-scorer/blob/1925d2489b2e54cc14411cf598d68e4762973fc1/prompt-builder.js). Các mốc dưới đây dịch từ bản này; xung đột C14 được ghi riêng, còn chờ owner quyết định.

## C1. Why Now (7)

**Tại sao là bây giờ?** Checklist 8 tín hiệu: enabling-cost crossover (Wright's law, cắt ngưỡng trong runway?), infra readiness (>50% penetration?), behavior evidence (≥1M người đã làm bản inferior?), regulatory window (ngày cố định?), hype-cycle position (chỉ dùng cho funding climate), incumbent blind spot, crisis/supply shock, 5-year asymmetry test (5 năm trước build được không? 5 năm nữa cửa sổ có đóng không?).

| Điểm | Mốc |
|---:|---|
| 0 | Không có tín hiệu "why now": chi phí chưa xuống ngưỡng có thể chi trả, hạ tầng chưa sẵn sàng, không có bằng chứng hành vi, không có cửa sổ pháp lý — hoặc regulation cấm. Quá sớm cũng là sai thời điểm. |
| 25 | Chỉ 1 tín hiệu yếu (hype) mà thiếu tín hiệu kinh tế/hành vi; hoặc vào muộn thị trường bão hòa. |
| 50 | 2–3 tín hiệu trung bình (bằng chứng hành vi hoặc hạ tầng gần sẵn sàng) nhưng cost crossover chưa trong runway; hoặc tín hiệu mâu thuẫn. |
| 75 | Timing stack rõ: ≥2 tín hiệu mạnh (cost crossover trong runway + bằng chứng hành vi, hoặc cửa sổ pháp lý có ngày cố định); trả lời được "sao không phải 5 năm trước/sau". |
| 100 | Timing stack đầy đủ + bất đối xứng: cost crossover trong giai đoạn ramp, infra >50%, bằng chứng hành vi mạnh, regulatory tailwind có ngày, điểm mù của incumbent được nêu tên cụ thể. |

## C2. Market Frame (12)

Hỏi trước: **khung thị trường vẽ có đúng không?** Sizing chỉ có nghĩa sau khi frame đúng.
- Phải có buyer unit đếm được × giá. Bottom-up cho SAM/SOM từ nguồn đếm có ngày tháng; top-down chỉ chấp nhận cho TAM.
- Derived-bar test: SOM có clear được doanh thu mục tiêu ở leader share ≤30% không?
- Tách riêng expansion pool (non-buyers) với barrier arithmetic — không inflate SAM bằng %.
- Chấm chi tiêu trong category hiện hữu theo anchors (C2/C10). Ghi riêng giả thuyết expansion: "sản phẩm biến X thành người mua vốn chưa trả tiền hôm nay vì…" trong Tracked Bets; bet giữ **MISSING(50)** tới khi trigger kích hoạt và không bao giờ dùng bet để thổi phồng C2 hoặc C10. Bet đang mở không cộng thêm điểm.

| Điểm | Mốc |
|---:|---|
| 0 | Không có buyer unit đếm được; sizing chỉ là "% của thị trường khổng lồ" (ngụy biện thị trường liền kề — market adjacency fallacy); hoặc frame bị bằng chứng phản bác (không có thực trạng cần sửa — no broken world). |
| 25 | Buyer unit đếm yếu; SAM/SOM đoán %; expansion pool chưa tách riêng; sizing mắc adjacency fallacy bị chặn tối đa ở mốc này. |
| 50 | Bottom-up SAM/SOM từ nguồn đếm có ngày tháng; SOM gắn với CAC/capacity; giả thuyết expansion được đặt tên và ghi trong Tracked Bets nhưng trigger chưa kích hoạt (MISSING-tracked). |
| 75 | Buyer unit rõ + ít nhất 1 nguồn đếm độc lập; qua derived-bar test (SOM đạt doanh thu mục tiêu ở leader share ≤30%); expansion pool tách riêng với barrier arithmetic. |
| 100 | Triangulated: 2+ nguồn đếm độc lập; expansion pool có bằng chứng sớm (non-buyers đang trả tiền cho giải pháp chắp vá); frame đứng vững khi reframe theo kịch bản bất lợi. |

## C3. Porter 5 forces (7)

**Phạm vi chấm:** nêu rõ cả 5 lực: đe dọa gia nhập, sức mạnh nhà cung cấp, sức mạnh người mua, sản phẩm thay thế, cạnh tranh hiện tại. Khi ≥2 lực bất lợi **vì rào cản gia nhập thấp**, viết counter-hypothesis tấn công ("rào cản thấp cho phép ta thắng nhờ…" phân phối tích hợp / data flywheel / user-affinity), kèm test rẻ và ghi trong Tracked Bets.

| Điểm | Mốc |
|---:|---|
| 0 | Cấu trúc bất lợi trên nhiều lực: người mua tập trung, nhà cung cấp mạnh, rào cản gia nhập thấp với đối thủ mới đang vào, sản phẩm thay thế mạnh, cạnh tranh gay gắt — không có vị thế khả tín. |
| 25 | Từ 2 lực trở lên bất lợi đáng kể; khác biệt hóa vừa phải không bù được áp lực cấu trúc. |
| 50 | Cấu trúc hỗn hợp: một số lực thuận lợi, số khác bất lợi; có vị thế giá trị nhận diện được nhưng vẫn chịu áp lực đối trọng thực sự. |
| 75 | Cấu trúc nhìn chung thuận lợi hoặc có khoảng trống cấu trúc được ghi nhận (phân khúc chưa được phục vụ đủ, incumbent yếu); có cách đáp ứng khả tín với từng lực bất lợi. |
| 100 | Ngành hấp dẫn về cấu trúc cho người mới với mô hình này: cạnh tranh yếu trong phân khúc mục tiêu, sức mạnh người mua/nhà cung cấp kiểm soát được, có rào cản gia nhập đáng kể để founder xây tiếp, đã có cách ứng phó với sản phẩm thay thế. |

## C4. Defensibility & moat (4)

**Phạm vi chấm:** độ bền, rào cản sao chép, quyền kiểm soát tài nguyên. Cơ chế user-affinity có bằng chứng (developer NPS đã đo, unit math của viral loop từ pilot thực, prototype thiết kế niềm tin đã test) được tính là bằng chứng moat một phần — có thể đạt 50 mà không cần patent hoặc độc quyền dữ liệu.

| Điểm | Mốc |
|---:|---|
| 0 | Tài nguyên và đề xuất giá trị quan sát được dễ sao chép, không có cơ chế kiểm soát hoặc duy trì độ bền khả tín. |
| 25 | Có lợi thế đi trước tạm thời, nhưng sao chép hoặc thay thế dễ dàng. |
| 50 | Một cơ chế phòng thủ cụ thể có cơ sở và đã hình thành một phần, nhưng các điều kiện VRIO quan trọng chưa được chứng minh. |
| 75 | Ít nhất 1 cơ chế đã chứng minh giá trị, tạo trở ngại sao chép đáng kể và nằm trong quyền kiểm soát của tổ chức. |
| 100 | Một cơ chế vững chắc hoặc tập hợp cơ chế củng cố nhau vượt qua các phép thử sao chép và thay thế khả tín trong thời hạn đánh giá đã nêu. |

## C5. Mô hình kinh doanh (7)

**Phạm vi chấm:** người trả tiền, trao đổi giá trị, cơ chế doanh thu, yêu cầu vận hành. Unit math thuộc C6.

| Điểm | Mốc |
|---:|---|
| 0 | Không có đường đi nhất quán từ tạo giá trị tới thu giá trị; chưa xác định người trả tiền hoặc họ không sẵn lòng trả ngay về nguyên tắc. |
| 25 | Cơ chế doanh thu có trên giấy nhưng logic người trả tiền / trao đổi giá trị còn lỗ hổng lớn. |
| 50 | Mô hình nhất quán, xác định được người trả tiền và cơ chế doanh thu; giả định then chốt chưa test. |
| 75 | Mô hình đã thể hiện qua pilot hoặc trường hợp tương đồng: người trả tiền thực sự trả, trao đổi giá trị rõ, hiểu yêu cầu vận hành. |
| 100 | Mô hình đã được chứng minh, thu giá trị lặp lại được qua nhiều phân khúc; yêu cầu vận hành đã được xác định đầy đủ. |

## C6. Unit economics & đường tới lợi nhuận (8)

**Phạm vi chấm:** biên đóng góp (contribution margin), CAC, LTV, payback, đường tới lợi nhuận vận hành có mốc thời gian.

| Điểm | Mốc |
|---:|---|
| 0 | Có bằng chứng khả tín rằng unit economics âm về cấu trúc, không có biện pháp khắc phục được chứng minh (contribution âm sau toàn bộ chi phí biến đổi). |
| 25 | Có doanh thu nhưng CAC vượt contribution LTV, hoặc payback vượt mọi thời hạn hợp lý; cách khắc phục chưa được chứng minh. |
| 50 | Unit math nhất quán trên giấy; input then chốt (CAC, retention, chi phí hỗ trợ) chưa test hoặc cho kết quả hỗn hợp. |
| 75 | Economics theo cohort đã đo: contribution dương, CAC payback trong khoảng thời gian được mô hình hóa, có đường đi đã tính chi phí để trang trải chi phí cố định. |
| 100 | Economics nhiều cohort đã đối soát; LTV/CAC lành mạnh cả với kịch bản bất lợi; đường tới lợi nhuận vận hành rõ với các mốc có ngày tháng. |

## C7. Founder-market fit (10)

**Phạm vi chấm:** kiến thức, năng lực, khả năng tiếp cận và học hỏi riêng của đội ngũ.

| Điểm | Mốc |
|---:|---|
| 0 | Quan sát được lỗ hổng năng lực nền tảng chặn cơ hội, không có cách xử lý khả tín. |
| 25 | Đội ngũ có một số năng lực hữu ích, nhưng còn lỗ hổng lớn riêng cho cơ hội này mà chưa có cách đáp ứng cụ thể. |
| 50 | Đã thể hiện kiến thức liên quan và một phần năng lực thực thi, nhưng còn thiếu năng lực bao phủ hoặc khả năng tiếp cận quan trọng. |
| 75 | Đội ngũ thể hiện hiểu biết domain sâu, năng lực thực thi then chốt, khả năng tiếp cận khách hàng và học hỏi theo bằng chứng. |
| 100 | Hiểu biết riêng cho cơ hội và năng lực bổ trợ nhau được chứng minh lặp lại qua các nhiệm vụ thực thi và học hỏi khó. |

## C8. Scale & time to revenue (7)

**Phạm vi chấm:** khả năng lặp lại việc cung ứng **và** công sức / chi phí thời gian của founder: thời gian tới MVP, tới doanh thu, độ phù hợp với runway.

| Điểm | Mốc |
|---:|---|
| 0 | Không thể scale việc cung ứng tới mục tiêu theo bất kỳ mô hình đã test nào; hoặc thời gian tới doanh thu vượt runway của founder mà không có biện pháp giảm thiểu. |
| 25 | Chạy được ở quy mô nhỏ; scale tốn công sức tăng không tương xứng; hoặc đường từ MVP tới doanh thu vượt 2 lần runway founder có. |
| 50 | Phần lõi lặp lại được, thiết kế scale khả tín; bottleneck đã test một phần; có ước lượng công sức/thời gian nhưng chưa kiểm chứng. |
| 75 | Test công suất đạt với mức tăng nguồn lực kiểm soát được; thời gian tới MVP và tới doanh thu có bằng chứng từ các lần xây dựng tương đồng; cam kết thời gian của founder được mô hình hóa rõ. |
| 100 | Việc nhân rộng đã được chứng minh qua nhiều điều kiện/cohort; đã đo công sức, vốn, nhân sự trên mỗi đơn vị mở rộng; thời gian tới doanh thu đã thể hiện hoặc được giới hạn chặt. |

## C9. Risk register — 5 nhóm (6)

**Phạm vi chấm:** kiểm tra từng nhóm regulatory / technology / market / execution / financial (pháp lý / công nghệ / thị trường / thực thi / tài chính); **chấm theo rủi ro dư trọng yếu xấu nhất (worst material residual)**.

| Điểm | Mốc |
|---:|---|
| 0 | Blocker nghiêm trọng đã được xác minh ở bất kỳ nhóm nào khiến không thể vận hành (ví dụ không thể có giấy phép, công nghệ không khả thi). |
| 25 | Phơi nhiễm rủi ro đáng kể được ghi nhận ở ≥1 nhóm có thể dừng thực thi; biện pháp giảm thiểu chưa chứng minh hoặc thiếu nguồn lực. |
| 50 | Đã xem xét cả 5 nhóm; xác định rủi ro trọng yếu với biện pháp giảm thiểu có cơ sở nhưng chưa chứng minh. |
| 75 | Rủi ro hàng đầu trong từng nhóm liên quan có biện pháp giảm thiểu được chứng minh và người chịu trách nhiệm được nêu tên; phơi nhiễm còn lại có giới hạn. |
| 100 | Rủi ro nghiêm trọng đã được kiểm tra độc lập; đã diễn tập phương án dự phòng; phơi nhiễm còn lại được giới hạn rõ theo từng nhóm. |

## C10. Market demand reality (8)

**Phạm vi chấm:** thị trường có thực không? Người mua có đang chi tiền cho giải pháp thay thế **hôm nay** không? Độc lập với traction của founder này; kỷ luật expansion C2/C10 ở mục C2 vẫn áp dụng.

| Điểm | Mốc |
|---:|---|
| 0 | Bằng chứng cho thấy người mua không chi tiền cho category vấn đề này; giải pháp thay thế miễn phí và đủ tốt; không có ngân sách. |
| 25 | Có chi tiêu nhưng ít, đang giảm hoặc chỉ ở phân khúc không khớp mục tiêu. |
| 50 | Có bằng chứng người mua trả tiền cho giải pháp thay thế; độ sâu (bao nhiêu tiền, thường xuyên thế nào, bao nhiêu người) còn hỗn hợp hoặc mới có bằng chứng một phần. |
| 75 | Bằng chứng mạnh về chi tiêu thực: đối thủ có doanh thu, giải pháp thay thế được tài trợ, ngân sách được ghi nhận, mua lặp lại trong category. |
| 100 | Chi tiêu category sâu và đang tăng với nhiều bằng chứng doanh thu độc lập; người mua chủ động tìm giải pháp tốt hơn (dữ liệu ý định, danh sách chờ, chi tiêu mở rộng). |

## C11. Founder traction (4)

**Phạm vi chấm:** những gì **founder này** đã chứng minh. Trọng số cố ý thấp: chưa có traction không được đánh chìm ý tưởng có thị trường thực.

| Điểm | Mốc |
|---:|---|
| 0 | Test hành vi phản bác giả thuyết (người dùng từ chối dùng thử, rời bỏ ngay). |
| 25 | Quan tâm nhưng chưa cam kết (khen, đăng ký), chưa có sử dụng có ý nghĩa hoặc trả tiền. |
| 50 | Có một phần tương tác; sử dụng prototype sớm; chưa có traction — trạng thái bình thường trước ra mắt, **không phải hình phạt**. |
| 75 | Pilot có trả tiền hoặc cam kết ràng buộc từ khách hàng mục tiêu; quan sát được sử dụng lặp lại. |
| 100 | Traction lặp lại qua nhiều cohort; retention/expansion; đã xem xét bằng chứng trái chiều. |

## C12. Capital fit (5)

**Phạm vi chấm:** cần bao nhiêu vốn để tới doanh thu, tới lợi nhuận; bootstrap / VC / debt có hợp với founder này không?

| Điểm | Mốc |
|---:|---|
| 0 | Vốn cần vượt mọi nguồn founder có thể tiếp cận; không có đường tài trợ. |
| 25 | Nhu cầu vốn lớn; đường tài trợ mang tính suy đoán hoặc không hợp mô hình. |
| 50 | Đã ước lượng nhu cầu vốn theo khoảng; có đường tài trợ hợp lý (bootstrap / angel / VC / debt) nhưng chưa cam kết. |
| 75 | Đường tới doanh thu và tới lợi nhuận đã tính chi phí; hình thức tài trợ khớp nguồn lực founder và mô hình. |
| 100 | Đường vốn tinh gọn có bằng chứng từ trường hợp tương đồng; tài trợ đã cam kết hoặc rất dễ tiếp cận; kế hoạch cấp vốn theo mốc. |

## C13. M&A potential (2)

**Phạm vi chấm:** bên mua chiến lược, giao dịch tiền lệ, bội số định giá — quyền chọn upside, trọng số cố ý nhỏ.

| Điểm | Mốc |
|---:|---|
| 0 | Không có bên mua khả dĩ; ngành không có hoạt động mua lại trong category này. |
| 25 | Có bên mua về lý thuyết nhưng không có giao dịch tiền lệ trong phân khúc. |
| 50 | Có thương vụ mua lại tiền lệ ở category liền kề với bội số định giá được công bố; logic chiến lược hợp lý. |
| 75 | Nêu tên bên mua chiến lược có lịch sử mua lại đúng category này; bội số tiền lệ hỗ trợ phép tính exit hấp dẫn. |
| 100 | Thị trường bên mua sôi động với tiền lệ gần đây ở bội số cao; ý tưởng khớp một "mảnh ghép còn thiếu" đã biết của ≥2 bên mua chiến lược được nêu tên. |

## C14. Go-to-market (7)

**Phạm vi chấm:** khách hàng tiếp cận được, quy trình chuyển đổi và kênh có khả năng lặp lại.

> **OPEN OWNER DECISION: C14 hypothesis vs test-evidence conflict**
> Ownership của bản triển khai (`prompt-builder.js:137`) cho phép giả thuyết phân phối được nêu tên, test được trong ngân sách validation ("hypothesis + test defined" trong Tracked Bets) ở mốc 75 thay vì mặc định 50; không được "50-and-forget" khi có giả thuyết test được. Nhưng anchor 75 (`prompt-builder.js:142`) yêu cầu các test kênh riêng biệt chứng minh quy trình lặp lại, còn bet đang mở cộng 0 điểm (`prompt-builder.js:215`). Giữ nguyên cả hai phát biểu và anchors bên dưới; **chưa chọn quy tắc ưu tiên**, chờ owner giải quyết xung đột.

| Điểm | Mốc |
|---:|---|
| 0 | Bằng chứng cho thấy đường tiếp cận đề xuất không thể tiếp cận hoặc chuyển đổi số người mua cần thiết, không có phương án thay thế khả tín. |
| 25 | Có một phần khả năng tiếp cận, nhưng thu hút khách hàng còn tùy hứng hoặc phụ thuộc quan hệ đặc biệt của founder. |
| 50 | Có bằng chứng về kênh cụ thể và quy trình mua, có funnel ban đầu nhưng khả năng lặp lại chưa chắc chắn. |
| 75 | Các test kênh riêng biệt chứng minh quy trình tái lập được, hiểu rõ các bước chuyển đổi và ràng buộc của chu kỳ bán hàng. |
| 100 | Đường tiếp cận chính tiếp tục tái lập được qua các cohort liên quan, có khả năng chống chịu khả tín trước rủi ro tập trung hoặc thay đổi quyền tiếp cận. |

## F3. Category Trajectory Forecast 3–5y (6) — *trọng số tạm thời, chưa hiệu chuẩn*

Chấm **chất lượng của việc dự báo**, không chấm lạc quan/bi quan. Dự báo input (cost curves, adoption indicators, policy dates), không dự báo output. Direction + order of magnitude, dạng scenario/bracket — cấm point estimate từ 1 nguồn analyst.

| Điểm | Mốc |
|---:|---|
| 0 | Không có forecast input nào; chỉ có point estimate từ 1 nguồn analyst. |
| 25 | Có 1 input yếu, không có cost curve / adoption indicator / policy date. |
| 50 | Có direction + ≥1 input đo được (cost curve hoặc adoption leading indicator), nhưng chưa thành scenario; hoặc MISSING-tracked (chưa nghiên cứu). |
| 75 | Base/bull/bear hoặc bracket range, mỗi case có input đo được; nêu watch variables và giới hạn. |
| 100 | Triangulated: cost curve có learning rate đo được + adoption indicators đồng thuận + policy dates cố định; chiến lược thắng ở ≥2 scenario; có lịch sử kiểm toán dự báo (forecast audit history) nếu trước đây đã dự báo. |

## Quy tắc chấm

- **Một quan sát, một chủ:** cùng một fact không cộng/trừ điểm ở hai tiêu chí.
- **Asymmetric Upside (lens, không vào điểm):** nếu X đúng thì business trông như Y với economics Z — phân loại CONVEX (sai thì lỗ có giới hạn, đúng thì thắng lớn) / CONCAVE.
- **Tracked Bets:** mọi uncertainty lớn ghi thành bet có giả thuyết + trigger kiểm chứng rẻ + ngày chấm lại. Bet đang mở = 0 điểm cộng thêm.
- Điểm số không phải xác suất thành công, không phải khuyến nghị đầu tư.

---
*Chuẩn Leona — Business Idea Scoring V4 (PRIOR). Dùng miễn phí trên web: https://free-ai-tools-hub.vercel.app (URL tạm — sẽ cập nhật domain chính thức).*
