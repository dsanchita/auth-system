from django.urls import path
from .views import (
    LogoutView,
    RegisterView,
    CustomTokenObtainPairView,
    CustomTokenRefreshView,
    UserListView,
    ApproveUserView,
    UserProfileView
)

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', CustomTokenObtainPairView.as_view(), name='login'),
    path('token/refresh/', CustomTokenRefreshView.as_view(), name='token_refresh'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('users/', UserListView.as_view(), name='user-list'),
    path('users/<int:user_id>/approve/', ApproveUserView.as_view(), name='approve-user'),
    path('profile/', UserProfileView.as_view(), name='user-profile'),
]