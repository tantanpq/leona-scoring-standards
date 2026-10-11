# Chấm hook video ngắn — Hook / Virality Scoring V1

Chấm **video ngắn (TikTok / Reels / Shorts)** trên thang **/100**: tiềm năng viral được chuẩn hóa theo cohort tương đương.
Mọi trọng số là **PRIOR** — chưa calibration trên corpus thật.

**Hai lớp điểm:**
- **PP (Pre-publish Potential):** chưa có analytics — video có "đủ chất liệu" để sống trong feed không?
- **OV (Observed Virality):** có analytics 1h/6h/24h — behavioral metrics thật ra sao?
- **50 = median trong cohort tương đương**, KHÔNG phải "50% cơ hội viral". Không bao giờ gọi điểm là xác suất viral.

## 8 tiêu chí

| ID | Tiêu chí | W | Đo gì |
|---|---|---:|---|
| C1 | Hook Capture | 22 | Stop the scroll: 0–3s / 3–6s giữ được người xem không |
| C2 | Retention & Pacing | 22 | Giữ attention: retention curve, meaningful interrupt density (cấm thưởng cắt cảnh mù quáng) |
| C3 | Completion & Payoff | 15 | Xem hết + promise được resolve (hook gap mạnh mà không resolve → trừ ở đây) |
| C4 | Rewatchability / Loop | 10 | Xem lại: repeat views, plays/unique viewers |
| C5 | Shareability | 15 | Share (0.45) + save (0.30) + comment (0.15) + like (0.10) — share nặng nhất vì là transmission |
| C6 | Emotional Arousal & Novelty | 8 | Arousal peak, surprise, timing — cảm xúc *dự đoán*, không phải sinh lý thật |
| C7 | Trend & Packaging Fit | 5 | Trend fit × genre fit; packaging: 9:16, caption ≤3s, safe-zone |
| C8 | CTA / Conversion | 3 | Attention → audience: follower conversion, profile action |

## Ma trận genre (điều chỉnh trọng số)

| Genre | C1 | C2 | C3 | C4 | C5 | C6 | C7 | C8 |
|---|---|---|---|---|---|---|---|---|
| Base | 22 | 22 | 15 | 10 | 15 | 8 | 5 | 3 |
| Horror | 18 | 21 | 18 | 8 | 14 | 16 | 3 | 2 |
| Lifestyle/Fashion | 22 | 18 | 10 | 8 | 19 | 8 | 11 | 4 |
| Travel | 18 | 20 | 15 | 10 | 19 | 10 | 5 | 3 |
| Food | 20 | 18 | 15 | 14 | 17 | 8 | 6 | 2 |
| Music performance | 16 | 22 | 12 | 20 | 14 | 10 | 5 | 1 |
| Comedy ngắn | 24 | 17 | 21 | 12 | 18 | 5 | 2 | 1 |

## Hướng dẫn chấm pre-publish (không có analytics)

Với mỗi tiêu chí, đánh giá 0–100 dựa trên proxies quan sát được từ video:
- **C1:** time-to-proposition ≤3s? Hook có claim/câu hỏi cụ thể (không vague)? 3s đầu có novelty?
- **C2:** có bao nhiêu "meaningful interrupt" (thay đổi hình/âm/nghĩa đáng kể) trên mỗi giây? Có dead-zone không?
- **C3:** promise ở hook có được resolve ở cuối không? Video kết thúc ở payoff hay lê thê sau payoff?
- **C4:** có moment 10–20s đáng xem lại không? Có loop tự nhiên (kết nối cuối→đầu) không?
- **C5:** nội dung có high-arousal emotion (ngạc nhiên, thán phục, phẫn nộ...) khiến người ta muốn share không?
- **C6:** có peak cảm xúc rõ không? Surprise đặt đúng timing không?
- **C7:** có dùng trend/sound đang lên không (tương đối, không "trending = +10")? Caption xuất hiện ≤3s?
- **C8:** CTA có rõ và đặt đúng chỗ (không quá sớm/intrusive) không?

## Quy tắc chấm

- **Một metric, một chủ:** không double-count cùng một số liệu ở hai tiêu chí.
- Thiếu feature = **50**, coverage 0, liệt kê vào missing list. Không dồn trọng số.
- **Giới hạn trung thực:** điểm đo behavioral potential đã percentile-normalize — KHÔNG phải xác suất viral tuyệt đối, chất lượng nghệ thuật, hay đạo đức nội dung. Không có ngưỡng universal kiểu "retention 70% = viral".
- Nội dung vi phạm policy (bạo lực cực đoan, sexual hóa trẻ em) → **bypass scoring**, không chấm.

---
*Chuẩn Leona — Hook/Virality Scoring V1 (PRIOR). Dùng miễn phí trên web: https://free-ai-tools-hub.vercel.app (URL tạm — sẽ cập nhật domain chính thức).*
