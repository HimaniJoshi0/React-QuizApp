import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { apiRequest } from '../../api'
import CommonButton from '../../components/button'
import SearchIcon from '@mui/icons-material/Search'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import PersonIcon from '@mui/icons-material/Person'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import AddIcon from '@mui/icons-material/Add'
import { Skeleton } from '@mui/material'
import CreateQuizModal from '../../components/createQuizModal'
import CustomModal from '../../components/customModal'; // Import CustomModal
import Typography from '@mui/material/Typography'; // Import Typography
import Box from '@mui/material/Box'; // Import Box
import Button from '@mui/material/Button'; // Import Button

// Simple helper function to get a cookie by name
const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
};

const Quiz = () => {
  const [allQuizz, setAllQuizz] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); // New state for login modal

  const fetchData = async () => {
    try {
      const resp = await apiRequest({
        method: 'GET',
        path: '/quiz',
      })
      setAllQuizz(resp.data)
      setLoading(false)
    } catch (error) {
      console.error("Failed to fetch quizzes:", error)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleQuizClick = async (id) => {
    navigate(`/quiz/${id}`)
  }

  const filteredQuizzes = allQuizz.filter(quiz =>
    quiz.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    quiz.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const QuizSkeleton = () => (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
      <div className="flex items-center justify-between mb-4">
        <Skeleton variant="text" width={100} height={24} sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)' }} />
        <div className="flex items-center space-x-2">
          <Skeleton variant="circular" width={20} height={20} sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)' }} />
          <Skeleton variant="text" width={50} height={24} sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)' }} />
        </div>
      </div>

      <Skeleton variant="text" width={200} height={32} sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)' }} className="mb-2" />
      <Skeleton variant="rectangular" height={60} sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)' }} className="mb-4" />

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Skeleton variant="circular" width={20} height={20} sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)' }} />
          <Skeleton variant="text" width={80} height={24} sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)' }} />
        </div>
        <div className="flex items-center space-x-2">
          <Skeleton variant="circular" width={20} height={20} sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)' }} />
          <Skeleton variant="text" width={60} height={24} sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)' }} />
        </div>
      </div>
    </div>
  )

  const handleOpenModal = () => {
    const token = getCookie('auth_token'); // Replace 'your_auth_token_name' with your actual cookie name
    if (token) {
      setIsModalOpen(true);
    } else {
      setIsLoginModalOpen(true); // Open login required modal
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCloseLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const handleCreateQuizSubmit = (data) => {
    console.log('Quiz data submitted:', data);
    // TODO: Add API call logic here to create the quiz
    // Example: apiRequest({ method: 'POST', path: '/quiz', data: data });
    handleCloseModal(); // Close modal after submission
  };

  return (
    <div className="min-h-screen bg-[#0A0F1C] text-white pb-20">
      {/* Hero Section */}
      <div className="relative overflow-hidden py-20 px-4">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#00A3FF] opacity-10 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#00FFB2] opacity-10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#00A3FF] to-[#00FFB2] text-transparent bg-clip-text">
            Explore AI-Powered Quizzes
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Discover a wide range of interactive quizzes designed to test and enhance your knowledge
          </p>
          <CommonButton
            title="Create New Quiz"
            icon={<AddIcon />}
            onclick={handleOpenModal}
            classes="bg-gradient-to-r from-[#00A3FF] to-[#00FFB2] hover:from-[#00FFB2] hover:to-[#00A3FF] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
          />
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-6xl mx-auto px-4 mb-12">
        <div className="relative">
          <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
          <input
            type="text"
            placeholder="Search quizzes by title or description..."
            className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00A3FF] backdrop-blur-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Quiz List */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            // Show skeletons while loading
            [...Array(6)].map((_, index) => (
              <QuizSkeleton key={index} />
            ))
          ) : filteredQuizzes.length > 0 ? (
            // Show actual quiz cards
            filteredQuizzes.map((quiz) => (
              <div
                key={quiz.id}
                onClick={() => handleQuizClick(quiz.id)}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-[#00A3FF]/10"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-gradient-to-r from-[#00A3FF] to-[#00FFB2] text-transparent bg-clip-text font-semibold">
                    {quiz.topic}
                  </span>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <AccessTimeIcon className="text-[#00A3FF]" />
                    <span>{quiz.timeLimit} min</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-2">{quiz.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{quiz.description}</p>

                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center space-x-2">
                    <PersonIcon className="text-[#00A3FF]" />
                    <span>Author ID: {quiz.authorId}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MenuBookIcon className="text-[#00FFB2]" />
                    <span>{quiz.isPublic ? 'Public' : 'Private'}</span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            // Show no results message
            <div className="col-span-full text-center py-20">
              <p className="text-gray-400 text-lg">No quizzes found. Try adjusting your search or create a new quiz!</p>
            </div>
          )}
        </div>
      </div>

      {/* Create Quiz Modal */}
      <CreateQuizModal
        open={isModalOpen}
        handleClose={handleCloseModal}
        onSubmit={handleCreateQuizSubmit}
      />

      {/* Login Required Modal */}
      <CustomModal
        open={isLoginModalOpen}
        handleClose={handleCloseLoginModal}
      >
        <Box sx={{
          bgcolor: '#0A0F1C',
          color: 'white',
          p: 4,
          borderRadius: '12px',
          textAlign: 'center',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}>
          <Typography variant="h6" component="h2" sx={{ mb: 2, color: '#00A3FF' }}>
            Login Required
          </Typography>
          <Typography sx={{ mb: 3 }}>
            Please log in to create a new quiz.
          </Typography>
          <Button
            variant="contained"
            onClick={() => navigate('/login')}
            sx={{
              mt: 2,
              py: 1.5,
              borderRadius: "12px",
              background: "linear-gradient(to right, #00A3FF, #00FFB2)",
              color: "#ffffff",
              fontWeight: "bold",
              textTransform: "none",
              fontSize: "1rem",
              "&:hover": {
                background: "linear-gradient(to right, #00A3FF, #00FFB2)",
                opacity: 0.9,
              },
            }}
          >
            Login
          </Button>
        </Box>
      </CustomModal>
    </div>
  )
}

export default Quiz