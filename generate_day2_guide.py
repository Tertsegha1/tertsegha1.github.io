from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.units import mm
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    HRFlowable, PageBreak, KeepTogether
)
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_RIGHT

OUTPUT = r"C:\Users\terts\Downloads\portfolio-site\AUKTIE_Day2_Instructor_Guide.pdf"

# ── Colours ──────────────────────────────────────────────────────────────────
NAVY   = colors.HexColor("#1B3A6B")
BLUE   = colors.HexColor("#2563A8")
TEAL   = colors.HexColor("#0D7C66")
AMBER  = colors.HexColor("#B45309")
GREEN  = colors.HexColor("#1A5C35")
INFO   = colors.HexColor("#EFF6FF")
INFO_B = colors.HexColor("#2563A8")
TIP    = colors.HexColor("#F0FDF4")
TIP_B  = colors.HexColor("#1A5C35")
WARN   = colors.HexColor("#FFFBEB")
WARN_B = colors.HexColor("#B45309")
CODE_BG= colors.HexColor("#1E293B")
CODE_FG= colors.white
LIGHT  = colors.HexColor("#F1F5F9")
MID    = colors.HexColor("#CBD5E1")
DARK   = colors.HexColor("#334155")

W, H = A4
MARGIN = 20*mm
CONTENT_W = W - 2*MARGIN

# ── Styles ───────────────────────────────────────────────────────────────────
def styles():
    return {
        "title": ParagraphStyle("title",
            fontName="Helvetica-Bold", fontSize=22, textColor=colors.white,
            leading=28, spaceAfter=4),
        "subtitle": ParagraphStyle("subtitle",
            fontName="Helvetica", fontSize=11, textColor=colors.HexColor("#BFDBFE"),
            leading=16, spaceAfter=0),
        "meta": ParagraphStyle("meta",
            fontName="Helvetica", fontSize=9, textColor=colors.HexColor("#93C5FD"),
            leading=13, spaceAfter=0),
        "h1": ParagraphStyle("h1",
            fontName="Helvetica-Bold", fontSize=14, textColor=NAVY,
            leading=18, spaceBefore=14, spaceAfter=4),
        "h2": ParagraphStyle("h2",
            fontName="Helvetica-Bold", fontSize=11, textColor=BLUE,
            leading=15, spaceBefore=10, spaceAfter=3),
        "h3": ParagraphStyle("h3",
            fontName="Helvetica-Bold", fontSize=10, textColor=DARK,
            leading=14, spaceBefore=7, spaceAfter=2),
        "body": ParagraphStyle("body",
            fontName="Helvetica", fontSize=9.5, textColor=DARK,
            leading=14, spaceAfter=5),
        "body_bold": ParagraphStyle("body_bold",
            fontName="Helvetica-Bold", fontSize=9.5, textColor=DARK,
            leading=14, spaceAfter=5),
        "bullet": ParagraphStyle("bullet",
            fontName="Helvetica", fontSize=9.5, textColor=DARK,
            leading=14, spaceAfter=3, leftIndent=14, bulletIndent=0),
        "code": ParagraphStyle("code",
            fontName="Courier", fontSize=8.5, textColor=colors.HexColor("#93C5FD"),
            leading=13, leftIndent=8, rightIndent=8),
        "code_comment": ParagraphStyle("code_comment",
            fontName="Courier-Oblique", fontSize=8.5,
            textColor=colors.HexColor("#64748B"),
            leading=13, leftIndent=8, rightIndent=8),
        "callout_title": ParagraphStyle("callout_title",
            fontName="Helvetica-Bold", fontSize=9, textColor=INFO_B,
            leading=13, spaceAfter=2),
        "callout_body": ParagraphStyle("callout_body",
            fontName="Helvetica", fontSize=9, textColor=DARK,
            leading=13),
        "tip_title": ParagraphStyle("tip_title",
            fontName="Helvetica-Bold", fontSize=9, textColor=TIP_B,
            leading=13, spaceAfter=2),
        "tip_body": ParagraphStyle("tip_body",
            fontName="Helvetica", fontSize=9, textColor=DARK,
            leading=13),
        "warn_title": ParagraphStyle("warn_title",
            fontName="Helvetica-Bold", fontSize=9, textColor=AMBER,
            leading=13, spaceAfter=2),
        "warn_body": ParagraphStyle("warn_body",
            fontName="Helvetica", fontSize=9, textColor=DARK,
            leading=13),
        "footer": ParagraphStyle("footer",
            fontName="Helvetica", fontSize=8, textColor=colors.HexColor("#94A3B8"),
            leading=11, alignment=TA_CENTER),
        "th": ParagraphStyle("th",
            fontName="Helvetica-Bold", fontSize=8.5, textColor=colors.white,
            leading=12),
        "td": ParagraphStyle("td",
            fontName="Helvetica", fontSize=8.5, textColor=DARK,
            leading=12),
        "td_code": ParagraphStyle("td_code",
            fontName="Courier", fontSize=8, textColor=DARK,
            leading=12),
        "qa_q": ParagraphStyle("qa_q",
            fontName="Helvetica-Bold", fontSize=9, textColor=NAVY,
            leading=13, spaceAfter=1),
        "qa_a": ParagraphStyle("qa_a",
            fontName="Helvetica", fontSize=9, textColor=DARK,
            leading=13, spaceAfter=5, leftIndent=10),
        "timing": ParagraphStyle("timing",
            fontName="Helvetica-Bold", fontSize=9, textColor=NAVY,
            leading=13),
        "page_num": ParagraphStyle("page_num",
            fontName="Helvetica", fontSize=8, textColor=colors.HexColor("#94A3B8"),
            alignment=TA_RIGHT),
    }

S = styles()

# ── Helper builders ───────────────────────────────────────────────────────────
def hr(color=MID, thickness=0.5, space=4):
    return HRFlowable(width="100%", thickness=thickness, color=color,
                      spaceAfter=space, spaceBefore=space)

def spacer(h=4):
    return Spacer(1, h*mm)

def callout(title, body, kind="info"):
    bg  = INFO  if kind=="info"  else TIP  if kind=="tip"  else WARN
    bc  = INFO_B if kind=="info" else TIP_B if kind=="tip" else AMBER
    ts  = S["callout_title"] if kind=="info" else S["tip_title"] if kind=="tip" else S["warn_title"]
    bs  = S["callout_body"]  if kind=="info" else S["tip_body"]  if kind=="tip" else S["warn_body"]
    body_html = body.replace("\n\n", "<br/><br/>").replace("\n", "<br/>")
    content = [
        [Paragraph(f"●  {title}", ts)],
        [Paragraph(body_html, bs)],
    ]
    t = Table(content, colWidths=[CONTENT_W])
    t.setStyle(TableStyle([
        ("BACKGROUND",    (0,0), (-1,-1), bg),
        ("LINEBEFORE",    (0,0), (-1,-1), 4, bc),
        ("TOPPADDING",    (0,0), (-1,-1), 5),
        ("BOTTOMPADDING", (0,0), (-1,-1), 5),
        ("LEFTPADDING",   (0,0), (-1,-1), 10),
        ("RIGHTPADDING",  (0,0), (-1,-1), 8),
        ("TOPPADDING",    (0,0), (0,0), 7),
        ("BOTTOMPADDING", (0,0), (0,0), 2),
    ]))
    return [t, spacer(2)]

def code_block(lines, lang="sql"):
    rows = []
    for ln in lines:
        style = S["code_comment"] if ln.strip().startswith("--") or ln.strip().startswith("#") else S["code"]
        rows.append([Paragraph(ln.replace("&","&amp;").replace("<","&lt;"), style)])
    hdr = [[Paragraph(lang, ParagraphStyle("ch", fontName="Helvetica-Bold",
                fontSize=7.5, textColor=colors.HexColor("#64748B"), leading=11))]]
    all_rows = hdr + rows
    t = Table(all_rows, colWidths=[CONTENT_W])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0,0), (-1,-1), CODE_BG),
        ("BACKGROUND", (0,0), (-1,0), colors.HexColor("#0F172A")),
        ("TOPPADDING",    (0,0), (-1,-1), 3),
        ("BOTTOMPADDING", (0,0), (-1,-1), 3),
        ("LEFTPADDING",   (0,0), (-1,-1), 10),
        ("RIGHTPADDING",  (0,0), (-1,-1), 8),
    ]))
    return [t, spacer(2)]

def data_table(headers, rows, col_widths=None):
    if col_widths is None:
        col_widths = [CONTENT_W / len(headers)] * len(headers)
    data = [[Paragraph(h, S["th"]) for h in headers]]
    for row in rows:
        data.append([Paragraph(str(c), S["td"]) for c in row])
    t = Table(data, colWidths=col_widths)
    t.setStyle(TableStyle([
        ("BACKGROUND",  (0,0), (-1,0), NAVY),
        ("ROWBACKGROUNDS", (0,1), (-1,-1), [colors.white, LIGHT]),
        ("GRID",        (0,0), (-1,-1), 0.3, MID),
        ("TOPPADDING",    (0,0), (-1,-1), 5),
        ("BOTTOMPADDING", (0,0), (-1,-1), 5),
        ("LEFTPADDING",   (0,0), (-1,-1), 7),
        ("RIGHTPADDING",  (0,0), (-1,-1), 7),
        ("VALIGN",      (0,0), (-1,-1), "TOP"),
    ]))
    return [t, spacer(3)]

def timing_block(chips):
    items = "     ".join(chips)
    t = Table([[Paragraph(items, S["timing"])]], colWidths=[CONTENT_W])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0,0), (-1,-1), LIGHT),
        ("TOPPADDING",    (0,0), (-1,-1), 6),
        ("BOTTOMPADDING", (0,0), (-1,-1), 6),
        ("LEFTPADDING",   (0,0), (-1,-1), 10),
        ("RIGHTPADDING",  (0,0), (-1,-1), 10),
    ]))
    return [t, spacer(3)]

def section_header(icon, title, duration):
    row = [[
        Paragraph(icon, ParagraphStyle("ic", fontName="Helvetica-Bold",
            fontSize=14, textColor=colors.white, leading=16)),
        Paragraph(f"{title}<br/><font size='8' color='#93C5FD'>{duration}</font>",
            ParagraphStyle("sh", fontName="Helvetica-Bold", fontSize=11,
                textColor=colors.white, leading=16)),
    ]]
    t = Table(row, colWidths=[12*mm, CONTENT_W - 12*mm])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0,0), (-1,-1), NAVY),
        ("TOPPADDING",    (0,0), (-1,-1), 7),
        ("BOTTOMPADDING", (0,0), (-1,-1), 7),
        ("LEFTPADDING",   (0,0), (-1,-1), 10),
        ("RIGHTPADDING",  (0,0), (-1,-1), 8),
        ("VALIGN",      (0,0), (-1,-1), "MIDDLE"),
    ]))
    return [t, spacer(2)]

def bullet(text):
    return Paragraph(f"•  {text}", S["bullet"])

def bold_body(text):
    return Paragraph(text, S["body"])

# ── Header / Footer ───────────────────────────────────────────────────────────
def on_page(canvas, doc):
    canvas.saveState()
    canvas.setFillColor(NAVY)
    canvas.rect(0, H - 14*mm, W, 14*mm, fill=1, stroke=0)
    canvas.setFillColor(colors.white)
    canvas.setFont("Helvetica-Bold", 9)
    canvas.drawString(MARGIN, H - 9*mm, "AUKTIE PostgreSQL Programme  —  Day 2 Instructor Guide")
    canvas.setFont("Helvetica", 8)
    canvas.setFillColor(colors.HexColor("#93C5FD"))
    canvas.drawRightString(W - MARGIN, H - 9*mm, "CONFIDENTIAL — INSTRUCTOR ONLY")
    canvas.setFillColor(colors.HexColor("#94A3B8"))
    canvas.setFont("Helvetica", 8)
    canvas.drawString(MARGIN, 10*mm, "Dr. Tertsegha Joseph Anande  ·  AUKTIE × NASSCO  ·  23 June – 3 July 2026")
    canvas.drawRightString(W - MARGIN, 10*mm, f"Page {doc.page}")
    canvas.setStrokeColor(MID)
    canvas.setLineWidth(0.4)
    canvas.line(MARGIN, 13*mm, W - MARGIN, 13*mm)
    canvas.restoreState()

# ── Cover page ────────────────────────────────────────────────────────────────
def cover():
    elems = []
    cover_data = [[
        Paragraph("AUKTIE PostgreSQL Programme 2026", S["meta"]),
        Paragraph("Day 2 Instructor Delivery Guide", S["title"]),
        Paragraph("SQL Fundamentals &amp; Advanced Querying", S["subtitle"]),
        Paragraph(" ", S["meta"]),
        Paragraph("Wednesday 24 June 2026  ·  Innovation Hub, Birmingham", S["meta"]),
        Paragraph("Dr. Tertsegha Joseph Anande  ·  AUKTIE × NASSCO", S["meta"]),
    ]]
    t = Table(cover_data, colWidths=[CONTENT_W])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0,0), (-1,-1), NAVY),
        ("TOPPADDING",    (0,0), (-1,-1), 10),
        ("BOTTOMPADDING", (0,0), (-1,-1), 10),
        ("LEFTPADDING",   (0,0), (-1,-1), 16),
        ("RIGHTPADDING",  (0,0), (-1,-1), 16),
    ]))
    elems.append(t)
    elems.append(spacer(5))

    objectives = [
        "#2 SQL Development", "#10 Data-Driven Decision Making",
        "DML / DDL", "JOINs", "Window Functions"
    ]
    chip_data = [[Paragraph(o, ParagraphStyle("chip", fontName="Helvetica-Bold",
        fontSize=8, textColor=BLUE, leading=11)) for o in objectives]]
    tc = Table(chip_data, colWidths=[CONTENT_W/5]*5)
    tc.setStyle(TableStyle([
        ("BACKGROUND", (0,0), (-1,-1), INFO),
        ("GRID", (0,0), (-1,-1), 0.3, INFO_B),
        ("TOPPADDING",    (0,0), (-1,-1), 5),
        ("BOTTOMPADDING", (0,0), (-1,-1), 5),
        ("LEFTPADDING",   (0,0), (-1,-1), 5),
        ("ALIGN", (0,0), (-1,-1), "CENTER"),
    ]))
    elems.append(tc)
    elems.append(spacer(4))

    elems += callout(
        "Day Focus",
        "Day 2 is the most visible skills day — participants will use these queries in their actual "
        "NSR work and share them with colleagues. Progress through the teaching sequence in order: "
        "DML/DDL first, JOINs second, window functions third. Never jump ahead. Each section builds "
        "on vocabulary from the previous one, and the exercises at the end weave all three together.",
        "info"
    )

    elems.append(Paragraph("Contents", S["h1"]))
    elems.append(hr(NAVY, 1))
    contents = [
        ("Pre-Session Checklist", "Payments table setup, terminal prep"),
        ("09:30  Registration &amp; Setup", "Verify connections, recap Day 1"),
        ("10:00  Section 1 — DDL &amp; DML", "~60 mins · INSERT, UPDATE, DELETE, TRUNCATE"),
        ("  Section 2 — JOINs", "~50 mins · INNER, LEFT, anti-join pattern"),
        ("  Section 3 — Window Functions", "~40 mins · RANK, PERCENT_RANK, running totals"),
        ("  Section 4 — Subqueries &amp; CTEs", "~20 mins · WITH clause, correlated subquery"),
        ("Exercises &amp; Knowledge Check", "Afternoon"),
        ("Day 2 Closing Message", "End of day"),
        ("Common Participant Questions", "Q&amp;A reference"),
    ]
    for title, note in contents:
        row = [[
            Paragraph(title, S["body_bold"]),
            Paragraph(note, ParagraphStyle("cn", fontName="Helvetica-Oblique",
                fontSize=9, textColor=colors.HexColor("#64748B"), leading=13)),
        ]]
        t = Table(row, colWidths=[CONTENT_W*0.55, CONTENT_W*0.45])
        t.setStyle(TableStyle([
            ("LINEBELOW", (0,0), (-1,-1), 0.3, MID),
            ("TOPPADDING",    (0,0), (-1,-1), 4),
            ("BOTTOMPADDING", (0,0), (-1,-1), 4),
            ("LEFTPADDING",   (0,0), (-1,-1), 0),
        ]))
        elems.append(t)

    elems.append(PageBreak())
    return elems

# ── Main content ──────────────────────────────────────────────────────────────
def body_content():
    elems = []

    # ── Pre-session ──────────────────────────────────────────────────────────
    elems.append(Paragraph("Pre-Session Checklist", S["h1"]))
    elems.append(hr(NAVY, 1))
    pre = [
        "The nsr schema must already exist from Day 1 — confirm with: \\dn in psql",
        "Create the nsr.payments table (DDL below) before participants arrive — it is needed for Section 2 and 3 demos",
        "Insert a small set of payment rows for the demo (sample INSERT below)",
        "Open the platform at Day 2 and confirm all three tabs load: DML/DDL, JOINs, Window Functions",
        "Log in as Instructor (PIN: AUKTIE2026) — confirm the Day 2 Mark Complete button is visible",
        "Prepare a single psql terminal window on the projector — Day 2 does not use two-terminal demos",
        "Remind participants at the start: Day 2 builds on the schema created in Day 1 — they need the same PostgreSQL connection",
    ]
    for p in pre:
        elems.append(bullet(p))
    elems.append(spacer(2))

    elems.append(Paragraph("Pre-session: Create the payments table", S["h3"]))
    elems += code_block([
        "-- Run this before the session — required for Section 2 and 3 demos",
        "CREATE TABLE IF NOT EXISTS nsr.payments (",
        "  payment_id     BIGSERIAL    PRIMARY KEY,",
        "  household_id   BIGINT       NOT NULL REFERENCES nsr.households(household_id),",
        "  payment_date   DATE         NOT NULL,",
        "  amount_ngn     NUMERIC(12,2) NOT NULL CHECK (amount_ngn > 0),",
        "  status         TEXT         NOT NULL CHECK (status IN ('pending','processed','failed'))",
        ");",
        "",
        "-- Insert sample payments for the demo",
        "INSERT INTO nsr.payments (household_id, payment_date, amount_ngn, status)",
        "VALUES",
        "  (1, '2026-01-15', 5000.00, 'processed'),",
        "  (1, '2026-02-15', 5000.00, 'processed'),",
        "  (1, '2026-03-15', 5000.00, 'failed'),",
        "  (2, '2026-01-20', 5000.00, 'processed');",
        "",
        "-- Confirm",
        "SELECT * FROM nsr.payments;",
    ])
    elems.append(spacer(3))

    # ── 09:30 ────────────────────────────────────────────────────────────────
    elems.append(Paragraph("09:30 — Registration &amp; Day 1 Recap", S["h1"]))
    elems.append(hr(NAVY, 1))
    elems += timing_block(["⏰ 09:30  Doors open", "⏰ 10:00  Training starts"])
    elems.append(bold_body(
        "Open with a 5-minute verbal recap of Day 1. Ask the room: "
        "<i>'What is MVCC? What does WAL protect against?'</i> — cold-call two participants. "
        "This is a low-stakes temperature check, not an examination. If the room is uncertain, "
        "spend an extra 5 minutes on a summary before moving to Day 2 content."
    ))
    elems.append(bold_body(
        "Day 2 assumption: every participant has the nsr schema with states, lgas, households, "
        "and individuals populated from Day 1. If anyone is missing data, direct them to re-run "
        "the Day 1 setup SQL silently while you continue with the rest of the room."
    ))
    elems.append(spacer(3))

    # ── Section 1: DDL & DML ─────────────────────────────────────────────────
    elems += section_header("✏", "Section 1 — DDL &amp; DML", "~60 mins")

    elems += callout(
        "What DDL and DML mean — establish this before the first demo",
        "<b>DDL (Data Definition Language)</b> is the set of SQL commands that define or change the "
        "structure of the database: CREATE TABLE, ALTER TABLE, DROP TABLE, TRUNCATE. In PostgreSQL, "
        "DDL commands are transactional — you can roll them back within a BEGIN/COMMIT block. This is "
        "unusual: in MySQL or Oracle, DDL causes an implicit commit and cannot be undone.\n\n"
        "<b>DML (Data Manipulation Language)</b> is the set of commands that read or modify data: "
        "SELECT, INSERT, UPDATE, DELETE. DML operations are always subject to MVCC visibility rules "
        "and can always be wrapped in transactions.",
        "info"
    )

    elems.append(Paragraph("1.1 — INSERT with RETURNING", S["h2"]))
    elems.append(bold_body(
        "Demonstrate INSERT RETURNING. Ask the room: <i>'Why would you need the generated "
        "household_id immediately after inserting?'</i> Answer: to insert the household members "
        "(individuals) in the same script — you need the ID before you can reference it."
    ))
    elems += code_block([
        "-- INSERT with RETURNING — gets the generated BIGSERIAL id immediately",
        "INSERT INTO nsr.households (household_code, lga_id, head_name, pmt_score)",
        "VALUES ('HH-TEST-001', 1, 'Amina Musa', 22.750)",
        "RETURNING household_id, household_code;",
    ])
    elems += callout(
        "RETURNING — unique to PostgreSQL",
        "RETURNING is not part of standard SQL and is not available in MySQL. It attaches a SELECT "
        "clause to an INSERT or UPDATE, returning columns from the rows that were just written — "
        "without requiring a second round-trip query to retrieve them.\n\n"
        "In NSR workflows this is essential: when you insert a new household, PostgreSQL generates "
        "the household_id (a BIGSERIAL). RETURNING gives you that ID instantly in the same statement. "
        "Your script can immediately use it to insert that household's individuals — no second query, "
        "no race condition between two separate statements.",
        "info"
    )

    elems.append(Paragraph("1.2 — UPDATE with RETURNING", S["h2"]))
    elems += code_block([
        "-- UPDATE with RETURNING — confirms exactly which rows changed and what the new values are",
        "UPDATE nsr.households",
        "SET pmt_score = 30.250, enumeration_round = 2",
        "WHERE household_code = 'HH-TEST-001'",
        "RETURNING household_id, household_code, pmt_score;",
    ])
    elems += callout(
        "Why RETURNING on UPDATE matters",
        "Without RETURNING, an UPDATE returns only a row count: 'UPDATE 3'. You do not know which "
        "rows were affected or what their new values are without running a separate SELECT. "
        "RETURNING gives you the post-update state of every changed row in a single operation — "
        "useful for audit logging, confirming that a score was set correctly, or chaining the "
        "updated values into the next step of a script.",
        "info"
    )

    elems.append(Paragraph("1.3 — DELETE safety: SELECT before you DELETE", S["h2"]))
    elems.append(bold_body(
        "Before running the DELETE, run the exact same WHERE clause as a SELECT. "
        "Show the room what would be deleted before deleting it. "
        "Ask: <i>'What happens if the WHERE clause is wrong and this cascades?'</i>"
    ))
    elems += code_block([
        "-- Step 1: verify the target — use the exact same WHERE clause you will use for DELETE",
        "SELECT household_id, household_code, head_name",
        "FROM nsr.households",
        "WHERE household_code = 'HH-TEST-001';",
        "",
        "-- Step 2: if the result looks correct, proceed with the DELETE",
        "DELETE FROM nsr.households",
        "WHERE household_code = 'HH-TEST-001';",
    ])
    elems += callout(
        "Why SELECT-before-DELETE is mandatory practice in NSR",
        "The households table has ON DELETE CASCADE to individuals. Deleting one household row also "
        "deletes every individual record under it. A wrong WHERE clause — for example, accidentally "
        "omitting the household_code filter — could cascade-delete thousands of records in a single "
        "statement. There is no undo outside a transaction.\n\n"
        "The SELECT-first pattern costs one extra second and has prevented countless production "
        "disasters. Make it a habit your participants carry into their actual work.",
        "warn"
    )

    elems.append(Paragraph("1.4 — TRUNCATE vs DELETE", S["h2"]))
    elems += code_block([
        "-- DELETE removes rows one at a time, fires triggers, can be rolled back",
        "DELETE FROM nsr.households WHERE is_active = FALSE;",
        "",
        "-- TRUNCATE removes ALL rows instantly by deallocating storage pages",
        "-- RESTART IDENTITY resets BIGSERIAL sequences back to 1",
        "-- CASCADE extends the truncate to child tables (households -> individuals)",
        "-- WARNING: do not use on production data. Appropriate for staging tables only.",
        "TRUNCATE nsr.households RESTART IDENTITY CASCADE;",
    ])
    elems += data_table(
        ["", "DELETE", "TRUNCATE"],
        [
            ["Speed", "Slower — deletes row by row, updates indexes", "Instant — deallocates whole storage pages"],
            ["Triggers", "Fires row-level DELETE triggers", "Does not fire row-level triggers"],
            ["Rollback", "Can be rolled back within a transaction", "Can be rolled back only if inside BEGIN/COMMIT"],
            ["WHERE clause", "Supports filtering — delete specific rows", "No WHERE — removes all rows always"],
            ["Sequences", "Does not reset BIGSERIAL counters", "RESTART IDENTITY resets sequences to 1"],
            ["Correct use", "Targeted row removal in production", "Clearing staging/import tables between runs"],
        ],
        [40*mm, (CONTENT_W-40*mm)/2, (CONTENT_W-40*mm)/2]
    )

    elems.append(Paragraph("1.5 — Transaction control: BEGIN / COMMIT / ROLLBACK", S["h2"]))
    elems.append(bold_body(
        "Wrap a multi-step DML operation in a transaction to demonstrate atomicity. "
        "Then ROLLBACK to show the room that the database reverts completely."
    ))
    elems += code_block([
        "BEGIN;",
        "",
        "-- Update a pmt_score",
        "UPDATE nsr.households SET pmt_score = 99.9 WHERE household_code = 'HH-LA-001';",
        "",
        "-- Verify the change is visible inside this transaction",
        "SELECT household_code, pmt_score FROM nsr.households WHERE household_code = 'HH-LA-001';",
        "",
        "-- Oops — wrong score. Roll back the whole transaction.",
        "ROLLBACK;",
        "",
        "-- The table is unchanged",
        "SELECT household_code, pmt_score FROM nsr.households WHERE household_code = 'HH-LA-001';",
    ])
    elems += callout(
        "Atomicity — all or nothing",
        "A transaction is the database's guarantee of atomicity: either every statement inside "
        "the BEGIN/COMMIT block succeeds and is committed together, or the whole thing is rolled back "
        "as if none of it happened. This is the 'A' in ACID.\n\n"
        "In NSR batch processing this is critical. Imagine a script that (1) inserts a new household, "
        "(2) inserts the household members, and (3) marks the source record as processed. If step 2 "
        "fails halfway through, a ROLLBACK removes the partial household too — the database stays "
        "consistent. Without a transaction, you would have a household with no members and no way to "
        "know the source record was already processed.",
        "info"
    )
    elems.append(spacer(3))

    # ── Section 2: JOINs ─────────────────────────────────────────────────────
    elems += section_header("🔗", "Section 2 — JOINs", "~50 mins")

    elems += callout(
        "The core JOIN mental model — establish this before any code",
        "A JOIN combines rows from two tables based on a matching column. Think of it as a lookup: "
        "'for each row in table A, find the matching row in table B.' The key question is always: "
        "what happens when there is no match?\n\n"
        "<b>INNER JOIN</b>: rows with no match are silently dropped from both sides. Use when a "
        "match is mandatory — every household must have an LGA.\n\n"
        "<b>LEFT JOIN</b>: all rows from the left table are kept. Rows with no match on the right "
        "get NULLs in the right-hand columns. Use when absence of a match is meaningful — you want "
        "to see households that have never been paid.",
        "info"
    )

    elems.append(Paragraph("2.1 — INNER JOIN: household report across three tables", S["h2"]))
    elems.append(bold_body(
        "Run this query and ask: <i>'Why do we need two JOINs instead of one?'</i> "
        "Draw on the whiteboard: households → lgas → states. "
        "State name is not on households (3NF) — it requires two hops."
    ))
    elems += code_block([
        "-- INNER JOIN: households with their state and LGA",
        "-- Two JOINs needed: households -> lgas gives lga_name; lgas -> states gives state_name",
        "SELECT",
        "  h.household_code,",
        "  h.head_name,",
        "  s.state_name,",
        "  l.lga_name,",
        "  h.pmt_score",
        "FROM  nsr.households h",
        "JOIN  nsr.lgas   l  ON h.lga_id     = l.lga_id",
        "JOIN  nsr.states s  ON l.state_code = s.state_code",
        "WHERE h.is_active = TRUE",
        "ORDER BY s.state_name, h.pmt_score;",
    ])
    elems += callout(
        "Why INNER JOIN is correct here",
        "Every household in the NSR must belong to a valid LGA in a valid state — the foreign key "
        "constraint enforces this. If a household had no matching LGA (which the FK prevents), it "
        "would represent a data corruption problem. Using INNER JOIN means any such corrupt row would "
        "disappear from the result silently, which is actually a useful diagnostic: if the row count "
        "from this JOIN is lower than SELECT COUNT(*) FROM nsr.households, something is wrong with "
        "the data. In a clean database they will always match.",
        "info"
    )

    elems.append(Paragraph("2.2 — LEFT JOIN: payment summary including unpaid households", S["h2"]))
    elems.append(bold_body(
        "Ask before running: <i>'What value will payment_count show for a household that has never "
        "been paid?'</i> Answer: 0 — because COUNT() on a NULL returns 0. "
        "Then ask: <i>'What will total_paid show?'</i> Answer: NULL."
    ))
    elems += code_block([
        "-- LEFT JOIN: all active households with payment totals — zero for those never paid",
        "SELECT",
        "  h.household_code,",
        "  h.head_name,",
        "  COUNT(p.payment_id)  AS payment_count,",
        "  SUM(p.amount_ngn)    AS total_paid",
        "FROM  nsr.households h",
        "LEFT JOIN nsr.payments p",
        "  ON  h.household_id = p.household_id",
        "  AND p.status = 'processed'",
        "WHERE h.is_active = TRUE",
        "GROUP BY h.household_id, h.household_code, h.head_name",
        "ORDER BY payment_count DESC;",
    ])
    elems += callout(
        "The AND in the ON clause — a critical distinction",
        "The condition <b>p.status = 'processed'</b> is inside the ON clause, not the WHERE clause. "
        "This is deliberate and important.\n\n"
        "Placing it in ON means: 'try to match only to processed payments.' A household with only "
        "pending or failed payments finds no processed match, so it appears in the result with "
        "payment_count = 0. The LEFT JOIN preserves it.\n\n"
        "If you moved p.status = 'processed' to the WHERE clause, PostgreSQL would first do the "
        "LEFT JOIN (keeping all households), then filter out any row where status is not 'processed' — "
        "which includes the NULL rows for unpaid households. The result would silently drop all "
        "households with zero processed payments. This is one of the most common LEFT JOIN bugs "
        "in real-world SQL, and it produces no error — just wrong numbers.",
        "warn"
    )

    elems.append(Paragraph("2.3 — Anti-join: households that have never received a processed payment", S["h2"]))
    elems.append(bold_body(
        "This is the policy query: who has been enrolled but never paid? "
        "Ask the room to write it first, then show the solution. "
        "Most participants will reach for a subquery — show the LEFT JOIN approach is faster."
    ))
    elems += code_block([
        "-- Anti-join pattern: LEFT JOIN + IS NULL finds 'households with no match'",
        "SELECT",
        "  h.household_code,",
        "  h.head_name,",
        "  s.state_name",
        "FROM  nsr.households h",
        "JOIN  nsr.lgas   l  ON h.lga_id     = l.lga_id",
        "JOIN  nsr.states s  ON l.state_code = s.state_code",
        "LEFT JOIN nsr.payments p",
        "  ON  p.household_id = h.household_id",
        "  AND p.status = 'processed'",
        "WHERE h.is_active = TRUE",
        "  AND p.payment_id IS NULL",
        "ORDER BY s.state_name, h.household_code;",
    ])
    elems += callout(
        "The anti-join pattern explained",
        "The LEFT JOIN attempts to match each household to a processed payment. For households that "
        "have never been paid, no match is found — the p.* columns come back as NULL. The WHERE "
        "condition <b>p.payment_id IS NULL</b> keeps only those unmatched rows.\n\n"
        "This is called an anti-join: it returns rows from the left table that have no counterpart "
        "in the right table. It is semantically equivalent to NOT IN (subquery) or NOT EXISTS, but "
        "typically faster because the planner can use a hash join rather than evaluating a correlated "
        "subquery for every row.",
        "tip"
    )

    elems += data_table(
        ["JOIN type", "Rows returned", "Use when"],
        [
            ["INNER JOIN", "Only rows with a match on both sides", "Match is mandatory — every household must have an LGA"],
            ["LEFT JOIN", "All left rows; NULLs on right where no match", "Absence of match is meaningful — who has no payments?"],
            ["RIGHT JOIN", "All right rows; NULLs on left where no match", "Rarely used — rewrite as LEFT JOIN with tables swapped"],
            ["FULL OUTER JOIN", "All rows from both sides; NULLs where no match", "Comparing two datasets for discrepancies"],
            ["CROSS JOIN", "Every combination of left and right rows", "Generating test data; almost never in production"],
        ],
        [38*mm, 60*mm, CONTENT_W - 98*mm]
    )
    elems.append(spacer(3))

    # ── Section 3: Window Functions ──────────────────────────────────────────
    elems += section_header("📊", "Section 3 — Window Functions", "~40 mins")

    elems += callout(
        "GROUP BY vs window functions — the key distinction",
        "<b>GROUP BY collapses rows</b> — you get one output row per group and lose all the detail "
        "rows. You cannot see individual households once you have grouped by state.\n\n"
        "<b>Window functions keep every row</b> — they attach a computed value alongside each row "
        "without collapsing anything. You can see every individual household and its rank within "
        "its state in the same result set.\n\n"
        "The syntax that makes this work is the OVER () clause. OVER () tells PostgreSQL: 'compute "
        "this value using a window of rows, not a collapsed group.' PARTITION BY divides rows into "
        "independent groups (like GROUP BY but without collapsing). ORDER BY controls the ranking "
        "or accumulation order within each partition.",
        "info"
    )

    elems.append(Paragraph("3.1 — RANK() and PERCENT_RANK(): poverty targeting", S["h2"]))
    elems.append(bold_body(
        "This is the query participants will most want to take back to work. "
        "Run it, then explain the OVER clause column by column. "
        "Ask: <i>'What does rank 1 mean here?'</i> — the most vulnerable household in that state."
    ))
    elems += code_block([
        "-- Rank households by pmt_score within their state",
        "-- Lower pmt_score = more vulnerable = rank 1",
        "SELECT",
        "  h.household_code,",
        "  h.head_name,",
        "  s.state_name,",
        "  h.pmt_score,",
        "  RANK() OVER (",
        "    PARTITION BY l.state_code",
        "    ORDER BY h.pmt_score ASC",
        "  ) AS poverty_rank,",
        "  ROUND(",
        "    100.0 * PERCENT_RANK() OVER (",
        "      PARTITION BY l.state_code ORDER BY h.pmt_score",
        "    ), 1",
        "  ) AS percentile",
        "FROM  nsr.households h",
        "JOIN  nsr.lgas   l  ON h.lga_id     = l.lga_id",
        "JOIN  nsr.states s  ON l.state_code = s.state_code",
        "WHERE h.is_active = TRUE",
        "ORDER BY s.state_name, poverty_rank;",
    ])
    elems += callout(
        "Breaking down the OVER clause",
        "<b>PARTITION BY l.state_code</b>: divides all households into separate groups by state. "
        "RANK() resets to 1 at the start of each state — Lagos rank 1 and Kano rank 1 are "
        "independent.\n\n"
        "<b>ORDER BY h.pmt_score ASC</b>: within each state, households are ordered from lowest "
        "score to highest. Rank 1 is the most economically vulnerable household in that state.\n\n"
        "<b>RANK() vs DENSE_RANK()</b>: if two households tie at rank 3, RANK() produces 3, 3, 5 "
        "(skips 4 — the gap signals a tie). DENSE_RANK() produces 3, 3, 4 (no gap). For poverty "
        "targeting, RANK() is usually preferred — tied households are treated equally, and the "
        "gap signals to analysts that a tie occurred.\n\n"
        "<b>PERCENT_RANK()</b>: returns a value from 0.0 to 1.0 representing where the row falls "
        "relative to all rows in its partition. Multiplied by 100 it gives a percentile. A household "
        "at the 10th percentile is among the most vulnerable 10% in its state.",
        "info"
    )

    elems.append(Paragraph("3.2 — SUM() OVER: cumulative disbursement per household", S["h2"]))
    elems.append(bold_body(
        "This shows a running total — a common analytics requirement. "
        "Ask: <i>'Could you do this with GROUP BY?'</i> No — GROUP BY gives you the total per "
        "household, but not the running subtotal after each payment date."
    ))
    elems += code_block([
        "-- Running total of processed payments per household, ordered by date",
        "SELECT",
        "  household_id,",
        "  payment_date,",
        "  amount_ngn,",
        "  SUM(amount_ngn) OVER (",
        "    PARTITION BY household_id",
        "    ORDER BY payment_date",
        "    ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW",
        "  ) AS cumulative_paid",
        "FROM  nsr.payments",
        "WHERE status = 'processed'",
        "ORDER BY household_id, payment_date;",
    ])
    elems += callout(
        "The frame clause: ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW",
        "The frame clause defines exactly which rows within the window are included in each "
        "computation. UNBOUNDED PRECEDING means 'from the very first row in this partition.' "
        "CURRENT ROW means 'up to and including the row we are on right now.' Together they build "
        "a running sum: the first payment row shows just that payment; the second shows the sum of "
        "the first and second; and so on.\n\n"
        "Without an explicit frame clause, PostgreSQL uses a default that can produce unexpected "
        "results when ORDER BY is present. Always write the frame clause explicitly for running "
        "totals to make the intent clear.",
        "tip"
    )

    elems += data_table(
        ["Function", "What it computes", "NSR use case"],
        [
            ["RANK()", "Position within partition; ties share a rank, next rank skips", "Poverty targeting — rank households by vulnerability within state"],
            ["DENSE_RANK()", "Same as RANK() but no gaps after ties", "When analysts need consecutive ranks with no missing numbers"],
            ["PERCENT_RANK()", "Relative position as 0.0–1.0 (percentile)", "Identify bottom 10% of households for priority intervention"],
            ["ROW_NUMBER()", "Unique sequential number — no ties, no gaps", "Pagination, deduplication, picking one row per group"],
            ["SUM() OVER", "Running or partitioned total without collapsing rows", "Cumulative disbursement per household over time"],
            ["LAG() / LEAD()", "Value from the previous / next row in the window", "Month-on-month change in pmt_score; next payment date"],
        ],
        [40*mm, 72*mm, CONTENT_W - 112*mm]
    )
    elems.append(spacer(3))

    # ── Section 4: Subqueries & CTEs ─────────────────────────────────────────
    elems += section_header("🧩", "Section 4 — Subqueries &amp; CTEs", "~20 mins")

    elems += callout(
        "When to use a CTE instead of a subquery",
        "A CTE (Common Table Expression) is a named subquery defined with the WITH keyword at the "
        "top of a query. It does not change what the query does — it changes how readable it is. "
        "Use a CTE when a subquery is long enough that embedding it inline makes the main query "
        "hard to follow, or when you need to reference the same intermediate result more than once.",
        "info"
    )

    elems.append(Paragraph("4.1 — CTE: identify the bottom 20% of households by pmt_score", S["h2"]))
    elems += code_block([
        "-- CTE: name an intermediate result and reference it in the main query",
        "WITH ranked AS (",
        "  SELECT",
        "    h.household_id,",
        "    h.household_code,",
        "    h.head_name,",
        "    s.state_name,",
        "    h.pmt_score,",
        "    PERCENT_RANK() OVER (",
        "      PARTITION BY l.state_code ORDER BY h.pmt_score",
        "    ) AS pct_rank",
        "  FROM  nsr.households h",
        "  JOIN  nsr.lgas   l ON h.lga_id     = l.lga_id",
        "  JOIN  nsr.states s ON l.state_code = s.state_code",
        "  WHERE h.is_active = TRUE",
        ")",
        "SELECT household_code, head_name, state_name, pmt_score, pct_rank",
        "FROM   ranked",
        "WHERE  pct_rank <= 0.20",
        "ORDER BY state_name, pmt_score;",
    ])
    elems += callout(
        "Why the WHERE on pct_rank must be outside the CTE",
        "Window functions are computed after the WHERE clause in a single query — you cannot "
        "filter on a window function result in the same SELECT where it is computed. The CTE "
        "solves this by making the ranked result a named intermediate table, which the outer "
        "query can then filter freely. This is a very common pattern whenever you need to filter "
        "on a RANK(), ROW_NUMBER(), or PERCENT_RANK() value.",
        "tip"
    )

    elems.append(Paragraph("4.2 — Correlated subquery vs EXISTS", S["h2"]))
    elems.append(bold_body(
        "Show both patterns. Explain that EXISTS stops as soon as it finds the first match "
        "— it does not scan the whole subquery result. For large tables this is significantly faster."
    ))
    elems += code_block([
        "-- Correlated subquery: households where at least one payment exists",
        "-- Runs the inner SELECT once per outer row — can be slow on large tables",
        "SELECT household_code, head_name",
        "FROM   nsr.households h",
        "WHERE  (SELECT COUNT(*) FROM nsr.payments p",
        "        WHERE p.household_id = h.household_id) > 0;",
        "",
        "-- EXISTS is faster: stops at the first match, does not count all rows",
        "SELECT household_code, head_name",
        "FROM   nsr.households h",
        "WHERE  EXISTS (",
        "  SELECT 1 FROM nsr.payments p",
        "  WHERE  p.household_id = h.household_id",
        "    AND  p.status = 'processed'",
        ");",
    ])
    elems.append(spacer(3))

    # ── Exercises ────────────────────────────────────────────────────────────
    elems.append(PageBreak())
    elems.append(Paragraph("Exercises &amp; Knowledge Check", S["h1"]))
    elems.append(hr(NAVY, 1))
    elems.append(bold_body(
        "Direct participants to the Exercises tab on Day 2 in the platform. "
        "Three exercises are available — all use the nsr schema they built yesterday:"
    ))
    elems += data_table(
        ["Exercise", "Level", "What to look for"],
        [
            ["B1 — JOIN-based household report (household_code, head_name, state_name, lga_name, pmt_score)", "Basic", "Do they use two JOINs? Correct aliases? ORDER BY both columns?"],
            ["B2 — Window function ranking by pmt_score within state", "Intermediate", "PARTITION BY and ORDER BY both present? ASC for lowest-first ranking?"],
            ["B3 — Households never paid using LEFT JOIN (not subquery)", "Intermediate", "Filter on status in ON clause (not WHERE)? IS NULL check on payment_id?"],
        ],
        [78*mm, 18*mm, CONTENT_W - 96*mm]
    )
    elems += callout(
        "Common mistakes to watch for while walking the room",
        "<b>B1:</b> Using only one JOIN and trying to get state_name directly from households. "
        "Remind them: 3NF means state_name is not on households — it requires two hops.\n\n"
        "<b>B2:</b> Forgetting PARTITION BY and getting a single global rank across all states "
        "instead of a per-state rank. Ask them to check whether Lagos rank 1 and Kano rank 1 both appear.\n\n"
        "<b>B3:</b> Putting p.status = 'processed' in the WHERE clause instead of the ON clause. "
        "This silently converts the LEFT JOIN to an INNER JOIN and drops unpaid households. "
        "Ask them to verify: does a household with only failed payments appear in their results?",
        "warn"
    )
    elems.append(bold_body(
        "After exercises, open the Knowledge Check tab. Questions cover JOIN type selection, "
        "RETURNING behaviour, TRUNCATE vs DELETE, and window function syntax. "
        "Widespread wrong answers on any question signals a concept to revisit at the start of Day 3."
    ))
    elems.append(spacer(3))

    # ── Closing ──────────────────────────────────────────────────────────────
    elems.append(Paragraph("Day 2 Closing Message", S["h1"]))
    elems.append(hr(NAVY, 1))
    elems += callout(
        "Suggested closing",
        "\"The queries you wrote today are the ones you will actually use. The JOIN report, "
        "the never-paid list, the vulnerability ranking — these are real NSR analytics. "
        "Tomorrow we add the security layer: who is allowed to run these queries, on which tables, "
        "and how we audit what they have done. The SQL stays the same; the question is who "
        "controls it.\"",
        "tip"
    )
    elems.append(bold_body(
        "Mark Day 2 complete using the Mark Complete button on the platform. "
        "Remind participants that Day 3 covers PostgreSQL Administration, Security, and Backup — "
        "they should bring their Day 1 and Day 2 query notes with them."
    ))
    elems.append(spacer(3))

    # ── Q&A ──────────────────────────────────────────────────────────────────
    elems.append(Paragraph("Common Participant Questions", S["h1"]))
    elems.append(hr(NAVY, 1))
    qa = [
        ("What is the difference between WHERE and HAVING?",
         "WHERE filters rows before grouping — it cannot reference aggregates. HAVING filters groups after grouping — it can reference COUNT(), SUM() etc. If you are not using GROUP BY, you almost always want WHERE."),
        ("Can I use RETURNING with DELETE?",
         "Yes. DELETE FROM nsr.households WHERE ... RETURNING household_id returns the IDs of the rows that were just deleted. Useful for audit logging or passing deleted IDs to a subsequent INSERT into an archive table."),
        ("Why does my LEFT JOIN give fewer rows than expected?",
         "Most likely the status filter is in the WHERE clause instead of the ON clause. Moving it to WHERE converts the LEFT JOIN into an INNER JOIN for filtered rows. Check your ON clause carefully."),
        ("What is the difference between RANK() and ROW_NUMBER()?",
         "ROW_NUMBER() always assigns a unique sequential number — ties get different numbers (arbitrary ordering between tied rows). RANK() gives tied rows the same number and skips subsequent numbers. Use ROW_NUMBER() for deduplication; use RANK() for fair competitive ordering."),
        ("Can I wrap a DDL statement in a transaction?",
         "Yes — in PostgreSQL, DDL is transactional. You can BEGIN; CREATE TABLE ...; ROLLBACK; and the table will not exist. This is unlike MySQL and Oracle where DDL causes an implicit commit. It makes schema migrations much safer: wrap them in transactions and roll back if anything fails."),
        ("What is the performance difference between NOT IN and NOT EXISTS?",
         "NOT IN has a dangerous edge case: if any value in the subquery list is NULL, the entire NOT IN returns no rows (NULL comparison logic). NOT EXISTS does not have this problem. On large tables NOT EXISTS is also typically faster because it stops at the first match. Prefer NOT EXISTS or the LEFT JOIN IS NULL anti-join pattern."),
        ("When should I use a CTE vs a subquery?",
         "Use a CTE when the subquery is long enough to hurt readability inline, when you need to reference the same result more than once, or when you need to filter on a window function result (which requires an outer query). For simple one-use subqueries, an inline subquery is fine."),
    ]
    for q, a in qa:
        elems.append(Paragraph(f"Q: {q}", S["qa_q"]))
        elems.append(Paragraph(f"A: {a}", S["qa_a"]))

    return elems

# ── Build ─────────────────────────────────────────────────────────────────────
def build():
    doc = SimpleDocTemplate(
        OUTPUT,
        pagesize=A4,
        leftMargin=MARGIN, rightMargin=MARGIN,
        topMargin=18*mm, bottomMargin=18*mm,
        title="AUKTIE Day 2 Instructor Guide",
        author="Dr. Tertsegha Joseph Anande",
        subject="PostgreSQL SQL Fundamentals — Day 2 Delivery Guide",
    )
    story = cover() + body_content()
    doc.build(story, onFirstPage=on_page, onLaterPages=on_page)
    print(f"PDF written to: {OUTPUT}")

if __name__ == "__main__":
    build()
