# Chấm kịch bản — Storytelling / Craft Execution Score V1

Chấm **kịch bản phim, truyện ngắn, kịch bản video** trên thang **/100**: mức độ thực thi các tín hiệu craft quan sát được — **không phải** "hay tuyệt đối", không phải xác suất viral.
Mọi trọng số là **PRIOR** — chưa calibration trên corpus có human ratings.

**Cách tính:** Tổng = Σ(trọng số × điểm tiêu chí) / 100. Submetric không quan sát được = **50**, coverage 0, không dồn trọng số.

## 9 tiêu chí (trọng số mặc định)

| ID | Tiêu chí | W | Đánh giá gì |
|---|---|---:|---|
| C1 | Hook & Premise | 12 | Câu hook cụ thể, câu hỏi chưa có lời giải đáng giá, tính mới, promise–content alignment |
| C2 | Structure | 16 | Phân đoạn sự kiện, causal connectivity, setup→development→resolution, turning-point rõ, orphan-event rate |
| C3 | Character & Stakes | 12 | Nhân vật chính rõ, goal, động cơ, agency, stakes rõ + leo thang, thay đổi trạng thái |
| C4 | Conflict & Tension | 12 | Chướng ngại, nỗ lực thất bại, lực đối kháng, open loops, reversals, áp lực leo thang |
| C5 | Payoff & Resolution | 12 | Promise→payoff coverage (trọng số theo salience), dangling setups, main-question resolution |
| C6 | Dialogue & Voice | 10 | Gánh exposition, thoại phân biệt được người nói, tự nhiên, giọng nhất quán, tránh lặp |
| C7 | Pacing | 10 | Mật độ sự kiện/thông tin, dead-zone, biến tấu nhịp, độ dài hợp format |
| C8 | Originality | 8 | Khoảng cách ngữ nghĩa so với corpus cùng genre, tần suất cliché, kết hợp lạ |
| C9 | Emotional Impact | 8 | Quỹ đạo cảm xúc dự đoán, biên độ, reversals, vị trí peak, stakes–emotion alignment |

## Ma trận format/genre (trọng số điều chỉnh theo dạng nội dung)

| Profile | C1 | C2 | C3 | C4 | C5 | C6 | C7 | C8 | C9 |
|---|---|---|---|---|---|---|---|---|---|
| Video ngắn 15–60s | 20 | 12 | 8 | 12 | 14 | 8 | 14 | 6 | 6 |
| Video essay YouTube | 15 | 14 | 6 | 8 | 12 | 12 | 14 | 9 | 10 |
| Phim ngắn | 10 | 17 | 14 | 13 | 13 | 10 | 9 | 7 | 7 |
| Quảng cáo | 23 | 8 | 5 | 8 | 18 | 8 | 12 | 8 | 10 |
| Truyện thiếu nhi | 10 | 15 | 15 | 9 | 14 | 12 | 8 | 5 | 12 |
| Horror | 9 | 13 | 10 | 20 | 11 | 7 | 11 | 7 | 12 |
| Comedy | 14 | 10 | 10 | 12 | 14 | 14 | 13 | 9 | 4 |
| Drama | 8 | 15 | 18 | 13 | 13 | 12 | 8 | 5 | 8 |

Mỗi hàng cộng = 100. Chọn hàng gần nhất với nội dung cần chấm rồi tính tổng.

## Hướng dẫn chấm từng tiêu chí (mốc 0–100)

- **C1:** 3 dòng đầu có promise cụ thể không? Câu hỏi mở có đáng trả lời không? Trừ điểm vagueness (tạo tò mò rỗng).
- **C2:** turning points là soft priors (không pass/fail theo vị trí). Setup nào có payoff? Promise nào treo lơ lửng?
- **C3:** goal–motivation–stakes có rõ không? Stakes có leo thang không? Nhân vật có agency (tự hành động) không?
- **C4:** xung đột đo bằng density + escalation. Lưu ý: Kishōtenketsu không bị phạt vì "thiếu conflict".
- **C5:** coverage = Σ salience(promise được resolve) / Σ salience(promise). Chỉ phạt dangling promise có salience cao.
- **C6:** thoại có phân biệt được ai nói không? Exposition có bị nhồi không? Giọng có nhất quán không?
- **C7:** dead-zone ở đâu? Mật độ thông tin mới có đều không? (Câu ngắn ≠ nhịp nhanh.)
- **C8:** so với corpus cùng genre — cliché nào lặp lại? Có kết hợp lạ nào không?
- **C9:** quỹ đạo cảm xúc: peak ở đâu, có reversal không, kết thúc để lại dư âm gì.

## Quy tắc chấm

- **Template chỉ để diagnostic:** 3-act / Hero's Journey / Story Circle không bao giờ là thước đo "hay". Không trừ điểm vì "không đúng 3 hồi".
- **Một feature, một chủ:** stakes chỉ ở C3, open-loop chỉ ở C4, promise coverage chỉ ở C5.
- **Mỗi nhận định ngữ nghĩa phải kèm evidence span** (trích đoạn cụ thể) — đó là diễn giải, không phải ground truth khách quan.
- **50 = trung tính**, không phải "50% thành công". Confidence không phải xác suất thành công.

---
*Chuẩn Leona — Storytelling Scoring V1 (PRIOR, tên nội bộ: Craft Execution Score). Dùng miễn phí trên web: https://free-ai-tools-hub.vercel.app (URL tạm — sẽ cập nhật domain chính thức).*
