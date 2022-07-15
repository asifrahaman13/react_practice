import React from 'react';
import "./Contact.css";

export default function Contact() {
    return (
    <>
           
                <section class="contacts">
                    <h2 class="text-center">contact us</h2>
                    <div class="forms">
                        <form method="POST" action="/contact">
                            <div class="form-group">
                                <label for="name" />Name
                                <input type="text" name="name" id="name" placeholder="Enter you name" required />
                            </div>

                            <div class="form-group">
                                <label for="email" />Email
                                <input type="email" name="email" id="email" placeholder="Enter you email" required />
                            </div>


                            <div class="form-group">
                                <label for="phone" />Phone
                                <input type="phone" name="phone" id="phone" placeholder="Enter you phone" required />
                            </div>

                            <div class="form-group">
                                <label for="stream" />Stream
                                <input type="text" name="stream" id="stream" placeholder="Enter you stream" required />
                            </div>

                            <div class="form-group">
                                <label for="concern">Concern
                                    <textarea class="form-input" name="concern" id="concern" placeholder="Enter you concern" required/>
                                </label>
                            </div>

                            <button type="submit" class="btn-dark">Submit</button>
                        </form>
                    </div>
                </section>
            </>
            )
}
