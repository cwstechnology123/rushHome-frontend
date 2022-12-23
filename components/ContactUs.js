export default function ContactUs() {
    return (
      <>
        <div className="video-wrap video-bg-1 style2 bg-f ptb-100">
            <div className="container">
            <div className="row">
                <div className="col-xl-6 col-lg-6">
                </div>
                <div className="col-xl-6 col-lg-6">
                <div className="content-title">
                    <h2>Need Help! Contact Us.</h2>
                    <hr className="center left" />
                    <p className="text-left">Our local experts are ready to guide you on your real estate journey. </p>
                </div>
                <div className="contact-form">
                    <form className="form-wrap" id="contactForm">
                    <div className="row">
                        <div className="col-md-6">
                        <div className="form-group">
                            <input type="text" name="name" placeholder="Name*" id="name" required data-error="Please enter your name" />
                            <div className="help-block with-errors" />
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div className="form-group">
                            <input type="email" name="email" id="email" required placeholder="Email*" data-error="Please enter your email" />
                            <div className="help-block with-errors" />
                        </div>
                        </div>
                        <div className="col-md-12">
                        <div className="form-group">
                            <input type="text" name="msg_subject" placeholder="Subject*" id="msg_subject" required data-error="Please enter your subject" />
                            <div className="help-block with-errors" />
                        </div>
                        </div>
                        <div className="col-md-12">
                        <div className="form-group v1">
                            <textarea name="message" id="message" placeholder="Your Messages.." cols={30} rows={10} required data-error="Please enter your message" defaultValue={""} />
                            <div className="help-block with-errors" />
                        </div>
                        </div>
                        <div className="col-md-12">
                        <button type="submit" className="btn style1 send_mess">Send Message</button>
                        <div id="msgSubmit" className="h3 text-center hidden" />
                        <div className="clearfix" />
                        </div>
                    </div>
                    </form>
                </div>
                </div>
            </div>
            </div>
        </div>
      </>
    )
}