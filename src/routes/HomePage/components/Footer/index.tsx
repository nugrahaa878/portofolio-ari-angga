import { Mail, Phone, MapPin, Star, ArrowRight } from "lucide-react";
import { TEAM_INFO, TESTIMONIALS } from "../../constants";

const TeamTestimonialsFooter = () => {
	return (
		<>
			{/* Team & Testimonials Section */}
			<section id="team" className="py-20 bg-healthcareGray-50">
				<div className="container mx-auto px-6">
					{/* Team Section */}
					<div className="text-center mb-16">
						<h2 className="text-4xl lg:text-5xl font-bold text-healthcareGray-900 mb-6">
							Meet Our Team
						</h2>
						<p className="text-xl text-healthcareGray-600 max-w-3xl mx-auto mb-12">
							Our experienced team combines deep healthcare domain knowledge
							with cutting-edge technical expertise to deliver exceptional results.
						</p>

						{/* Team Stats */}
						<div className="grid md:grid-cols-3 gap-8 mb-16">
							<div className="bg-white rounded-xl p-8 shadow-lg border border-healthcareGray-100">
								<div className="text-4xl font-bold text-healthcareBlue-600 mb-2">10+</div>
								<div className="text-healthcareGray-600">Years Combined Experience</div>
							</div>
							<div className="bg-white rounded-xl p-8 shadow-lg border border-healthcareGray-100">
								<div className="text-4xl font-bold text-healthcareTeal-600 mb-2">50+</div>
								<div className="text-healthcareGray-600">Healthcare Projects Delivered</div>
							</div>
							<div className="bg-white rounded-xl p-8 shadow-lg border border-healthcareGray-100">
								<div className="text-4xl font-bold text-healthcareGreen-600 mb-2">100%</div>
								<div className="text-healthcareGray-600">Client Satisfaction Rate</div>
							</div>
						</div>
					</div>

					{/* Testimonials */}
					<div className="mb-16">
						<h3 className="text-3xl font-bold text-healthcareGray-900 text-center mb-12">
							What Our Clients Say
						</h3>
						<div className="grid md:grid-cols-2 gap-8">
							{TESTIMONIALS.map((testimonial, index) => (
								<div
									key={index}
									className="bg-white rounded-2xl p-8 shadow-lg border border-healthcareGray-100 hover:shadow-xl transition-shadow duration-300"
								>
									{/* Stars */}
									<div className="flex mb-4">
										{[...Array(testimonial.rating)].map((_, i) => (
											<Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
										))}
									</div>

									{/* Quote */}
									<blockquote className="text-healthcareGray-700 italic mb-6 text-lg leading-relaxed">
										"{testimonial.content}"
									</blockquote>

									{/* Author */}
									<div className="flex items-center">
										<div className="w-12 h-12 bg-gradient-to-br from-healthcareBlue-100 to-healthcareTeal-100 rounded-full flex items-center justify-center mr-4">
											<span className="text-healthcareBlue-600 font-bold text-lg">
												{testimonial.name.charAt(0)}
											</span>
										</div>
										<div>
											<div className="font-semibold text-healthcareGray-900">{testimonial.name}</div>
											<div className="text-sm text-healthcareGray-600">{testimonial.position}</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* CTA Section */}
					<div className="text-center">
						<div className="bg-gradient-to-r from-healthcareBlue-600 to-healthcareTeal-600 rounded-2xl p-12 text-white">
							<h3 className="text-3xl font-bold mb-4">
								Ready to Start Your Healthcare Technology Journey?
							</h3>
							<p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
								Let's discuss how we can help transform your healthcare organization
								with innovative, compliant, and scalable technology solutions.
							</p>
							<button className="bg-white text-healthcareBlue-600 hover:bg-healthcareGray-50 px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center group">
								Schedule Free Consultation
								<ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
							</button>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer id="contact" className="bg-healthcareGray-900 text-white py-16">
				<div className="container mx-auto px-6">
					<div className="grid md:grid-cols-4 gap-8 mb-12">
						{/* Company Info */}
						<div className="md:col-span-2">
							<h3 className="text-2xl font-bold mb-4">{TEAM_INFO.companyName}</h3>
							<p className="text-healthcareGray-300 mb-6 leading-relaxed">
								{TEAM_INFO.description}
							</p>
							<div className="flex space-x-4">
								<div className="w-10 h-10 bg-healthcareBlue-600 rounded-lg flex items-center justify-center hover:bg-healthcareBlue-700 transition-colors cursor-pointer">
									<span className="text-sm font-bold">L</span>
								</div>
								<div className="w-10 h-10 bg-healthcareGray-700 rounded-lg flex items-center justify-center hover:bg-healthcareGray-600 transition-colors cursor-pointer">
									<span className="text-sm font-bold">G</span>
								</div>
								<div className="w-10 h-10 bg-healthcareTeal-600 rounded-lg flex items-center justify-center hover:bg-healthcareTeal-700 transition-colors cursor-pointer">
									<span className="text-sm font-bold">T</span>
								</div>
							</div>
						</div>

						{/* Services */}
						<div>
							<h4 className="text-lg font-semibold mb-4">Services</h4>
							<ul className="space-y-2 text-healthcareGray-300">
								<li className="hover:text-white cursor-pointer transition-colors">EHR Systems</li>
								<li className="hover:text-white cursor-pointer transition-colors">Telemedicine</li>
								<li className="hover:text-white cursor-pointer transition-colors">Healthcare Analytics</li>
								<li className="hover:text-white cursor-pointer transition-colors">Device Integration</li>
							</ul>
						</div>

						{/* Contact */}
						<div>
							<h4 className="text-lg font-semibold mb-4">Contact Us</h4>
							<div className="space-y-3 text-healthcareGray-300">
								<div className="flex items-center">
									<Mail className="w-5 h-5 mr-3 text-healthcareTeal-400" />
									<span className="text-sm">hello@healthtechsolutions.com</span>
								</div>
								<div className="flex items-center">
									<Phone className="w-5 h-5 mr-3 text-healthcareTeal-400" />
									<span className="text-sm">+1 (555) 123-4567</span>
								</div>
								<div className="flex items-center">
									<MapPin className="w-5 h-5 mr-3 text-healthcareTeal-400" />
									<span className="text-sm">Remote & On-site</span>
								</div>
							</div>
						</div>
					</div>

					{/* Bottom Bar */}
					<div className="border-t border-healthcareGray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
						<div className="text-healthcareGray-400 text-sm mb-4 md:mb-0">
							© 2024 {TEAM_INFO.companyName}. All rights reserved.
						</div>
						<div className="flex space-x-6 text-sm text-healthcareGray-400">
							<span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
							<span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
							<span className="hover:text-white cursor-pointer transition-colors">HIPAA Compliance</span>
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}

export default TeamTestimonialsFooter;