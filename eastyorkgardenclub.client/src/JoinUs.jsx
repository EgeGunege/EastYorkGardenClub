import { useState, useEffect } from 'react';
import Logo from '/src/img/eastyorkgardenclublogo.gif';
import './css/JoinUs.css';

const JoinUs = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState(null);
    const [postalCode, setPostalCode] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [hear, setHear] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [paymentMethod, setPaymentMethod] = useState({
        cash: false,
        cheque: false,
    });

    const [membershipType, setMembershipType] = useState({
        single: false,
        family: false,
        singleEt: false,
        familyEt: false,
    });

    const handlePaymentChange = (selected) => {
        setPaymentMethod({
            cash: false,
            cheque: false,
            [selected]: true,
        });
        
        if (selected === 'cash' || selected === 'cheque') {
            setMembershipType(prevState => ({
                ...prevState,
                singleEt: false,
                familyEt: false
            }));
        }
    };

    const handleMembershipChange = (selected) => {
        setMembershipType({
            single: false,
            family: false,
            singleEt: false,
            familyEt: false,
            [selected]: true,
        });
        
        if (selected === 'singleEt' || selected === 'familyEt') {
            setPaymentMethod(prevState => ({
                ...prevState,
                cash: false,
                cheque: false
            }));
        }
    };



    useEffect(() => {
        const phoneInput = document.getElementById('phone');
        const formatPhoneNumber = (e) => {
            var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
            e.target.value = !x[2] ? x[1] : '(' + x[1] + ')' + x[2] + (x[3] ? '-' + x[3] : '');
        };

        phoneInput.addEventListener('input', formatPhoneNumber);
        return () => {
            phoneInput.removeEventListener('input', formatPhoneNumber);
        };
    }, []);

    const handleInputChange = (e) => {
        setPhoneNumber(e.target.value);
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('title', name);
        formData.append('address', address);
        formData.append('city', city);
        formData.append('postalCode', postalCode);
        formData.append('phone', phoneNumber);
        formData.append('email', email);

        const response = await fetch('https://:44345/api/meetings', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            setName('');
            setAddress('');
            setCity(null);
            setPostalCode('');
            setPhoneNumber('');
            setErrorMessage('');
            document.querySelector('#meetingsLink').click()
        } else {
            setErrorMessage('Failed to upload meeting details. Please try again.');
        }
    };

    return (
        <>
            <form className="admin-form-container" onSubmit={handleFormSubmit}>
                <img src={Logo} alt="East York Garden Club Logo" className="login-logo" />
                <h2>MEMBERSHIP FORM</h2>
                <h4>Personal Information</h4>
                <div className="field-group">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Name(s)"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="field-group">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <div className="field-side-group">
                    <input
                        className="field-side"
                        type="text"
                        value={city}
                        placeholder="City"
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <input
                        className="field-side"
                        type="text"
                        value={postalCode}
                        placeholder="Postal Code"
                        onChange={(e) => setPostalCode(e.target.value)}
                    />
                </div>
                <div className="field-side-group">
                    <input
                        className="field-side-com"
                        type="text"
                        id="phone"
                        value={phoneNumber}
                        onChange={handleInputChange}
                        placeholder="(123)456-7890"
                    />
                    <input
                        className="field-side-com"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="example@example.com"
                    />
                    <div className="field-side-chk">
                        <label htmlFor="newsletter">
                            <input type="checkbox" id="newsletter" name="newsletter" />
                            Receive Newsletter
                        </label>
                    </div>
                </div>
                <p>Note: Your privacy is respected. We will only use your email address to send you EYGC information.  We do not distribute your email address to anyone else. </p>
                <h4>Payment Options</h4>
                <div className="payment-method">
                    <div className="payment-option">
                        <span className="payment-title">* Paying by Cash or Cheque:</span>
                        <label htmlFor="cash">
                            <input
                                type="checkbox"
                                id="cash"
                                name="cash"
                                checked={paymentMethod.cash}
                                onChange={() => handlePaymentChange('cash')}
                            />
                            Cash
                        </label>
                        <label htmlFor="cheque">
                            <input
                                type="checkbox"
                                id="cheque"
                                name="cheque"
                                checked={paymentMethod.cheque}
                                onChange={() => handlePaymentChange('cheque')}
                            />
                            Cheque
                        </label>
                        <label htmlFor="single">
                            <input
                                type="checkbox"
                                id="single"
                                name="single"
                                checked={membershipType.single}
                                onChange={() => handleMembershipChange('single')}
                            />
                            Single ($20)
                        </label>
                        <label htmlFor="family">
                            <input
                                type="checkbox"
                                id="family"
                                name="family"
                                checked={membershipType.family}
                                onChange={() => handleMembershipChange('family')}
                            />
                            Family ($30)
                        </label>
                    </div>
                    <div className="payment-option">
                        <div className="payment-title">
                            <span>** Paying By E-transfer to <a href="mailto:treasurer@yourorg.ca" className="email-link">treasurer@yourorg.ca</a></span>
                        </div>
                        <div className="bank-charge">
                            <span>(Bank surcharge of $1 included)</span>
                        </div>
                        <label htmlFor="single-et">
                            <input
                                type="checkbox"
                                id="single-et"
                                name="singleEt"
                                checked={membershipType.singleEt}
                                onChange={() => handleMembershipChange('singleEt')}
                            />
                            Single ($21)
                        </label>
                        <label htmlFor="family-et">
                            <input
                                type="checkbox"
                                id="family-et"
                                name="familyEt"
                                checked={membershipType.familyEt}
                                onChange={() => handleMembershipChange('familyEt')}
                            />
                            Family ($31)
                        </label>
                    </div>
                </div>
                <p>
                    <span style={{ fontWeight: 'bold' }}>Membership fees due by January of each year.</span>
                    <span style={{ fontWeight: 'normal' }}> Fees can be paid in person at a regular Club meeting or by mail.</span>
                </p>
                <p>*   Mail this form and a cheque (payable to &ldquo;East York Garden Club&rdquo;) to:  </p>
                <p style={{ fontWeight: 'bold' }}>East York Garden Club, c/o Cristina Brown, 7 Knightsbridge Road, Scarborough, ON  M1L 2A8</p>
                <p>
                    <span style={{ fontWeight: 'bold' }}>**  E-transfer: </span>
                    <span style={{ fontWeight: 'normal' }}>Membership fee including bank surcharge to </span>
                    <span style={{ fontWeight: 'bold' }}>treasurer@eygc.ca.</span>
                </p>
                <p>
                    <span style={{ fontWeight: 'normal' }}>Please indicate </span>
                    <span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>EYGC Membership and your name</span>
                    <span style={{ fontWeight: 'normal' }}> in the message.</span>
                </p>
                <span style={{ fontWeight: 'bold' }}>If new membership:  how did you hear about us, e.g. a local paper, a neighbour, our brochure?</span>
                <div className="field-group">
                    <input
                        className="form-control"
                        type="text"
                        placeholder=""
                        value={hear}
                        onChange={(e) => setHear(e.target.value)}
                    />
                </div>
                <div className="field-side-group">
                    <span>Age Group:</span>
                    <div className="field-side-chk">
                        <select name="ageGroup" id="ageGroup" className='selectStyle'>
                            <option value="">Select Age Group</option>
                            <option value="underAge">Under 18</option>
                            <option value="midAge">Between 18-60</option>
                            <option value="oldAge">Over 60</option>
                        </select>
                    </div>
                    <span style={{
                        fontStyle: 'italic', fontSize: 'small', marginLeft: '5px'
                    }}>
                        Note: It is voluntary if you choose to any age option.  The rental rate at Stan Wadlow Clubhouse is lower for organizations with a high number of seniors (over 60) and youth (under 18).  It is helpful, but not necessary, for us to have this information.
                    </span>
                </div>
                <div className="field-side-group" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                        <label>Do you want your name in the yearbook&rsquo;s members list?</label>
                        <label htmlFor="yearbookYes" style={{ marginRight: '10px' }}>
                            <input type="radio" id="yearbookYes" name="yearbook" value="yes" />
                            Yes
                        </label>
                        <label htmlFor="yearbookNo" style={{ marginRight: '10px' }}>
                            <input type="radio" id="yearbookNo" name="yearbook" value="no" />
                            No
                        </label>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <label>I would like to volunteer in some capacity with the Club</label>
                        <label htmlFor="volunteerYes" style={{ marginRight: '10px' }}>
                            <input type="radio" id="volunteerYes" name="volunteer" value="yes" />
                            Yes
                        </label>
                        <label htmlFor="volunteerNo" style={{ marginRight: '10px' }}>
                            <input type="radio" id="volunteerNo" name="volunteer" value="no" />
                            No
                        </label>
                    </div>
                </div>
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                <div className="field-group">
                    <button className="btn" type="submit">Upload</button>
                </div>
                <h5>Personal Information & Privacy Act Disclaimer</h5>
                <span style={{ fontSize: '0.75em' }}>The information provided on this form is for the exclusive and confidential use of EYGC.   Personal information of members, such as your name, address and telephone number is published in the EYGC Yearbook to identify a contact person for a specific event.  This will be maintained in accordance with Canada&rsquo;s Personal Information and Electronics Document Act.</span>
            </form>
        </>
    );
};

export default JoinUs;
