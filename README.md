# Chuẩn chấm điểm Leona (Leona Scoring Standards)

Bộ thang chấm điểm /100 do **Tan Ho và Leona AI** xây dựng và hiệu chuẩn dần theo thực tế.
Dùng để chấm: bản thảo sách, ý tưởng kinh doanh, kịch bản, hook video ngắn, lời nhạc, bản nhạc.

## Cách dùng (30 giây)

1. Mở file prompt trong thư mục `prompts/` tương ứng với thứ bạn muốn chấm.
2. Copy toàn bộ prompt, dán vào ChatGPT / Claude / Gemini của bạn, kèm nội dung cần chấm (bản thảo, ý tưởng, kịch bản...).
3. AI sẽ chấm từng tiêu chí theo đúng thang này, kèm bằng chứng trích dẫn, rồi ra tổng điểm /100.

Muốn hiểu sâu từng tiêu chí: đọc file tương ứng trong `specs/`.

## Các chuẩn hiện có

| Chuẩn | File spec | Prompt | Thang |
|---|---|---|---|
| Chấm bản thảo sách (tiểu thuyết/truyện) | `specs/book-scoring.md` | `prompts/cham-sach.md` | 10 tiêu chí /100 |
| Chấm ý tưởng kinh doanh / startup | `specs/business-idea-scoring.md` | `prompts/cham-y-tuong.md` | 15 tiêu chí /100 |
| Chấm kịch bản (craft kể chuyện) | `specs/script-scoring.md` | `prompts/cham-kich-ban.md` | 9 tiêu chí /100 |
| Chấm hook video ngắn (tiềm năng viral) | `specs/hook-virality-scoring.md` | `prompts/cham-hook.md` | 8 tiêu chí /100 |
| Chấm lời nhạc | `specs/lyric-scoring.md` | `prompts/cham-loi-nhac.md` | 6 tiêu chí /100 |
| Chấm bản nhạc (4 trụ) | `specs/music-scoring.md` | `prompts/cham-nhac.md` | 4 trụ /100 |

## Nguyên tắc chung của mọi thang Leona

- **Thang /100, trọng số cộng = 100.** Điểm tổng = Σ(trọng số × điểm tiêu chí) / 100.
- **Mốc điểm 0 / 25 / 50 / 75 / 100** cho từng tiêu chí — 50 là trung bình/trung tính, không phải "50% thành công".
- **Thiếu bằng chứng = 50**, ghi rõ MISSING. Không dồn trọng số sang tiêu chí khác.
- **Điểm số là hỗ trợ ra quyết định**, không phải dự báo thành công, không phải lời khuyên chuyên môn.
- **Mọi trọng số đều là PRIOR** — đang chờ hiệu chuẩn thêm từ dữ liệu thực tế. Dùng là bạn đồng ý với điều này.

## Công cụ web miễn phí

Các thang này cũng được đóng gói thành công cụ web miễn phí (không cần đăng ký):
**https://free-ai-tools-hub.vercel.app** *(URL tạm — sẽ cập nhật domain chính thức)*

## Giấy phép

CC BY 4.0 — © Tan Ho & Leona AI. Xem `LICENSE`.
Bạn được tự do dùng, chia sẻ, điều chỉnh — chỉ cần ghi nguồn.
