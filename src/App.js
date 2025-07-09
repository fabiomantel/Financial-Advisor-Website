import React, { useState, useEffect } from 'react';
import './App.css';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setFormData({ name: '', phone: '', email: '', message: '' });
      alert('הטופס נשלח בהצלחה! תודה על פנייתך. אם המייל לא מגיע תוך מספר דקות, מומלץ לבדוק גם את תיבת הספאם/זבל.');
      setIsSubmitting(false);
    }, 1200);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="App" dir="rtl" style={{ fontFamily: 'Heebo, Arial, sans-serif', background: 'linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%)', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg" />
        <div className="hero-content">
          <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/5605bbeb8_me-modified.png" alt="פביו מנטל" className="profile-pic" />
          <h1 className="hero-title">תוכנית להגדלת ההון<br /><span className="highlight">אדריכלות פיננסית לצמיחה</span></h1>
          <p className="hero-sub">איך תסדר את ההון שלך מחדש כדי להאיץ צמיחה</p>
          <a href="#contact" className="cta-btn">לתיאום פגישת היכרות חינמית</a>
        </div>
      </section>

      {/* About the Program */}
      <section className="section">
        <h2 className="section-title">מה כוללת התוכנית?</h2>
        <p className="section-desc">תוכנית ייחודית המעניקה לך סדר פיננסי, כלים מעשיים, ותוכנית פעולה אישית שתלווה אותך לאורך שנים. במהלך שני מפגשים אישיים נבנה יחד את האסטרטגיה המתאימה לך, נבין איפה הכסף שלך נמצא ואיך הוא יכול לעבוד עבורך.</p>
        <ul className="features-list">
          <li>✅ תבין איפה בדיוק נמצא ההון שלך ולאן הוא הולך</li>
          <li>✅ תוכנית פעולה מעשית שתוכל ליישם מיידית</li>
          <li>✅ כלים פשוטים למעקב שזמינים גם מהספה</li>
          <li>✅ ידע שישמש אותך שנים קדימה</li>
          <li>✅ ניהול מושכל של התזרים הפנוי שלך להשקעות חדשות</li>
          <li>✅ שקט נפשי מהעתיד הכלכלי</li>
        </ul>
      </section>

      {/* Who is it for? */}
      <section className="section alt-bg">
        <h2 className="section-title">למי מתאימה התוכנית?</h2>
        <ul className="audience-list">
          <li>➤ למי שיש תזרים חיובי ורוצה לראות את הכסף שלו עובד חכם יותר</li>
          <li>➤ למי שיש חסכונות ורוצה להגדיל את ההון במסלולים יציבים ומפוזרים</li>
          <li>➤ למי ששוקל לרכוש דירה ורוצה להבין כמה הון עצמי באמת יש לו</li>
          <li>➤ למי שמרגיש שהוא צריך סדר וכלים להתחיל להשקיע</li>
          <li>➤ למי שמתלבט אם ואיך להשקיע בנדל"ן או שוק ההון</li>
          <li>➤ למי שרוצה למקסם תשואה ולנהל סיכון בצורה אחראית</li>
          <li>➤ למי שמבין שההשקעה הכי טובה היא היום</li>
        </ul>
      </section>

      {/* About Fabio Mantel */}
      <section className="section">
        <h2 className="section-title">מי אני?</h2>
        <div className="about-me">
          <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/bd05b875f_me.jpg" alt="פביו מנטל" className="about-pic" />
          <div>
            <p>נעים מאוד, אני פביו מנטל – מהנדס תוכנה, יזם, ומשקיע מנוסה.<br />במהלך 15 שנותיי בהייטק, בניתי מערכת השקעות חכמה שמבוססת על אדריכלות פיננסית אישית.<br />אני משקיע בשוק ההון, בקרנות השתלמות, בנדל"ן בארה"ב, ומלווה משפחות לבניית תוכנית להגדלת ההון.</p>
            <ul className="achievements-list">
              <li>✅ תיק השקעות מדדי עם תשואה שנתית ממוצעת של 10%</li>
              <li>✅ מיקסום קרן השתלמות לתשואה של 12% בשנה</li>
              <li>✅ השקעות נדל"ן בארה"ב בתשואה של 9% עם מינוף מושכל</li>
              <li>✅ חילוץ כספי פנסיה למטרות השקעה מניבות</li>
              <li>✅ ליווי פיננסי אישי למשפחות וניהול הון קיים וחדש</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section alt-bg">
        <h2 className="section-title">מה מספרים הלקוחות?</h2>
        <div className="testimonials">
          <div className="testimonial">
            <p>"לא ידעתי בכלל כמה הון יש לי. פביו עזר לי לראות את התמונה המלאה ובנה איתי תוכנית שבזכותה השקענו בנכס מניב ראשון."</p>
            <span>— יובל, הגדיל את ההון דרך נדל"ן ממונף בישראל</span>
          </div>
          <div className="testimonial">
            <p>"פביו נתן לי סדר, כלים, וביטחון להתחיל להשקיע. היום יש לי קרן השתלמות מפוצלת נכון ותיק מדדים בפיזור רחב."</p>
            <span>— שירלי, מימשה את ההון הרדום בתשואה חכמה</span>
          </div>
          <div className="testimonial">
            <p>"עברנו ביחד תהליך קצר ויעיל שהניב חיסכון מיידי של אלפי שקלים כל חודש. ממליץ לכל מי שלא רוצה שהכסף שלו יעמוד במקום."</p>
            <span>— מתן, מינף תזרים חודשי חכם להשקעות</span>
          </div>
          <div className="testimonial">
            <p>"רכשתי דירה להשקעה בפרויקט עם השבחה עתידית, והתחלתי לבנות את תיק המניות הפרטי שלי עם הפקדה חודשית קבועה."</p>
            <span>— רם, התחיל להשקיע בשני אפיקים במקביל</span>
          </div>
          <div className="testimonial">
            <p>"התחלתי להשקיע במדדים רחבים בשוק ההון בתיק מגוון ומסודר, למדתי למנף נכון, חילצתי הון מהנכס שלי – ואני מרגיש בשליטה."</p>
            <span>— נדב, מהנדס תוכנה</span>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section contact-section" id="contact">
        <h2 className="section-title">מוכנים לצאת לדרך?</h2>
        <p className="section-desc">אני מזמין אתכם לפגישת היכרות חינמית, בה נבין יחד איך לסדר מחדש את ההון שלכם ולהתחיל לצמוח.<br />זה לא ייעוץ השקעות – זו אדריכלות פיננסית מותאמת אישית.</p>
        <div className="contact-options">
          <a href="https://wa.me/972523631525" target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
            <FaWhatsapp /> דברו איתי עכשיו בוואטסאפ
          </a>
          <span className="contact-or">או מלאו את הפרטים בטופס ונחזור אליכם בהקדם:</span>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="שם מלא" value={formData.name} onChange={e => handleInputChange('name', e.target.value)} required />
          <input type="tel" placeholder="טלפון" value={formData.phone} onChange={e => handleInputChange('phone', e.target.value)} required pattern="^[0-9-+\s()]*$" title="נא להזין מספר טלפון תקין." />
          <input type="email" placeholder="מייל" value={formData.email} onChange={e => handleInputChange('email', e.target.value)} required />
          <textarea placeholder="שאלה או הערה" value={formData.message} onChange={e => handleInputChange('message', e.target.value)} rows={3} />
          <button type="submit" disabled={isSubmitting}>{isSubmitting ? 'שולח...' : 'שליחת הטופס'}</button>
        </form>
        <div className="email-info">🔁 הטופס ישלח אוטומטית למייל הבא: <b>fabiomantel@gmail.com</b></div>
      </section>

      {/* Footer with Socials */}
      <footer className="footer">
        <div className="footer-socials">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
          <a href="https://wa.me/972523631525" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
        </div>
        <div className="footer-text">פביו מנטל | כל הזכויות שמורות | אדריכלות פיננסית לצמיחה</div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button className="scroll-top-btn" onClick={scrollToTop} aria-label="גלול למעלה">↑</button>
      )}
    </div>
  );
}

export default App; 