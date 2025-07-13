"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ArrowLeft, ArrowRight, Calendar, Users, MapPin, Star, Sparkles, Camera, Filter, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ScrollProgress } from "@/components/scroll-progress"

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const categories = ["All", "Corporate", "Wedding", "Social", "Entertainment", "Cultural"]

  const galleryImages = [
    {
      id: 1,
      src: "/images/elegant-dinner.png",
      title: "Elegant Evening Gala",
      category: "Corporate",
      description: "A sophisticated evening event with premium dining and entertainment under the stars",
      date: "March 2024",
      location: "Luxury Resort",
      attendees: "300+",
      rating: 5,
    },
    {
      id: 2,
      src: "/images/balloon-celebration.png",
      title: "Grand Product Launch",
      category: "Corporate",
      description: "An explosive product launch celebration with spectacular balloon drop finale",
      date: "February 2024",
      location: "Convention Center",
      attendees: "500+",
      rating: 5,
    },
    {
      id: 3,
      src: "/images/cultural-festival.png",
      title: "Cultural Heritage Festival",
      category: "Cultural",
      description: "A vibrant cultural celebration bringing together diverse communities in harmony",
      date: "January 2024",
      location: "City Square",
      attendees: "2000+",
      rating: 5,
    },
    {
      id: 4,
      src: "/images/elegant-dinner.png",
      title: "Luxury Wedding Reception",
      category: "Wedding",
      description: "An intimate yet grand wedding reception with exquisite attention to detail",
      date: "December 2023",
      location: "Garden Venue",
      attendees: "200+",
      rating: 5,
    },
    {
      id: 5,
      src: "/images/balloon-celebration.png",
      title: "Corporate Anniversary",
      category: "Corporate",
      description: "Celebrating 10 years of success with an unforgettable milestone event",
      date: "November 2023",
      location: "Corporate HQ",
      attendees: "400+",
      rating: 5,
    },
    {
      id: 6,
      src: "/images/cultural-festival.png",
      title: "Community Celebration",
      category: "Social",
      description: "A large-scale community gathering celebrating local traditions and culture",
      date: "October 2023",
      location: "Community Park",
      attendees: "1500+",
      rating: 5,
    },
    {
      id: 7,
      src: "/images/elegant-dinner.png",
      title: "Charity Fundraiser Gala",
      category: "Social",
      description: "An elegant charity event raising funds for local community projects",
      date: "September 2023",
      location: "Hotel Ballroom",
      attendees: "250+",
      rating: 5,
    },
    {
      id: 8,
      src: "/images/balloon-celebration.png",
      title: "Music Festival Launch",
      category: "Entertainment",
      description: "The grand opening of a three-day music festival with spectacular effects",
      date: "August 2023",
      location: "Festival Grounds",
      attendees: "1000+",
      rating: 5,
    },
    {
      id: 9,
      src: "/images/cultural-festival.png",
      title: "Traditional Arts Festival",
      category: "Cultural",
      description: "Showcasing traditional arts, crafts, and performances from various cultures",
      date: "July 2023",
      location: "Arts Center",
      attendees: "800+",
      rating: 5,
    },
  ]

  const filteredImages =
    selectedCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <ScrollProgress />
      {/* Enhanced Header */}
      <header className="fixed top-0 w-full bg-black/95 backdrop-blur-xl z-50 border-b border-red-900/30 shadow-xl shadow-red-900/10">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative w-10 h-10 bg-gradient-to-br from-red-500 via-red-600 to-red-800 rounded-lg flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-red-500/30">
                <Sparkles className="w-5 h-5 text-white animate-pulse" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-red-400 via-red-500 to-red-700 bg-clip-text text-transparent">
                EventMaster
              </span>
            </Link>

            {/* Enhanced Desktop Navigation */}
            <nav className="hidden md:flex space-x-1">
              {[
                { name: "Home", href: "/" },
                { name: "Services", href: "/#services" },
                { name: "About", href: "/#about" },
                { name: "Portfolio", href: "/#portfolio" },
                { name: "Gallery", href: "/gallery" },
                { name: "Contact", href: "/#contact" },
              ].map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 group text-sm ${
                    item.name === "Gallery"
                      ? "text-white bg-gradient-to-r from-red-600 to-red-700 shadow-lg shadow-red-500/30"
                      : "text-gray-300 hover:text-white hover:bg-red-900/20"
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                </Link>
              ))}
            </nav>

            {/* Enhanced Mobile Menu Button */}
            <button
              className="md:hidden relative w-8 h-8 text-white hover:text-red-500 transition-colors p-1 rounded-lg hover:bg-red-900/20"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Enhanced Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-red-900/30 animate-slide-down">
              <div className="flex flex-col space-y-1 mt-4">
                {[
                  { name: "Home", href: "/" },
                  { name: "Services", href: "/#services" },
                  { name: "About", href: "/#about" },
                  { name: "Portfolio", href: "/#portfolio" },
                  { name: "Gallery", href: "/gallery" },
                  { name: "Contact", href: "/#contact" },
                ].map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`transition-all duration-300 py-2 px-4 rounded-lg font-medium text-sm ${
                      item.name === "Gallery"
                        ? "text-white bg-gradient-to-r from-red-600 to-red-700"
                        : "text-white hover:text-red-400 hover:bg-red-900/20"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-12 bg-gradient-to-br from-red-950/20 to-black overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/balloon-celebration.png')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-red-600/20 text-red-400 border-red-600/30 animate-pulse px-4 py-1">
            <Camera className="w-4 h-4 mr-2" />
            Event Gallery
          </Badge>

          <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-red-200 to-red-500 bg-clip-text text-transparent">
            Our Event Gallery
          </h1>

          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-6">
            Explore our portfolio of successful events and see how we bring dreams to life through exceptional planning
            and execution.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-red-600 to-red-700 text-white"
                    : "border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                } transition-all duration-300 transform hover:scale-105 text-sm px-4 py-2`}
              >
                <Filter className="w-3 h-3 mr-2" />
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <Card
                key={image.id}
                className="bg-gradient-to-br from-gray-900 to-black border-red-900/30 hover:border-red-600/50 transition-all duration-300 group overflow-hidden cursor-pointer transform hover:scale-105 hover:shadow-xl hover:shadow-red-500/20"
                onClick={() => setSelectedImage(index)}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-red-600 text-white text-xs">{image.category}</Badge>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-bold text-base mb-1">{image.title}</h3>
                    <p className="text-gray-300 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {image.description}
                    </p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1 text-red-500" />
                      {image.date}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-3 h-3 mr-1 text-red-500" />
                      {image.attendees}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs text-gray-400">
                      <MapPin className="w-3 h-3 mr-1 text-red-500" />
                      {image.location}
                    </div>
                    <div className="flex items-center">
                      {[...Array(image.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-3xl bg-black border-red-900/30 p-0">
          {selectedImage !== null && (
            <>
              <DialogHeader className="p-4 pb-0">
                <DialogTitle className="text-white text-xl">{filteredImages[selectedImage].title}</DialogTitle>
              </DialogHeader>

              <div className="relative">
                <Image
                  src={filteredImages[selectedImage].src || "/placeholder.svg"}
                  alt={filteredImages[selectedImage].title}
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover"
                />

                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 p-2"
                  onClick={prevImage}
                >
                  <ArrowLeft className="w-4 h-4" />
                </Button>

                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 p-2"
                  onClick={nextImage}
                >
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>

              <div className="p-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-white font-semibold mb-2 text-sm">Event Details</h3>
                    <div className="space-y-1 text-gray-300 text-sm">
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-2 text-red-500" />
                        {filteredImages[selectedImage].date}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-3 h-3 mr-2 text-red-500" />
                        {filteredImages[selectedImage].location}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-3 h-3 mr-2 text-red-500" />
                        {filteredImages[selectedImage].attendees} Attendees
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-white font-semibold mb-2 text-sm">Description</h3>
                    <p className="text-gray-300 text-sm">{filteredImages[selectedImage].description}</p>
                    <div className="flex items-center mt-3">
                      <span className="text-gray-400 mr-2 text-sm">Rating:</span>
                      {[...Array(filteredImages[selectedImage].rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-950/30 to-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-white to-red-300 bg-clip-text text-transparent">
            Ready to Create Your Own Masterpiece?
          </h2>
          <p className="text-base md:text-lg text-gray-300 mb-6 max-w-xl mx-auto">
            Let us help you plan an unforgettable event that will be featured in our next gallery showcase.
          </p>
          <Link href="/#contact">
            <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-red-500/25 rounded-lg">
              Start Planning Your Event
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
